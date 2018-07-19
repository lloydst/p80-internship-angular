import { Component, OnInit } from '@angular/core';
import { IpService } from '../../services/ip.service';

/**
 * admin settings component: *not yet implemented
 */
@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {

    /**
     * constructor
     */
    constructor(private ipservice: IpService) { }
    configs

    /**
     * on init
     */
    ngOnInit() {
        this.getConfigs()
        this.getUserIP(function (ip) {
            document.getElementById("ip").innerHTML = 'Got your IP ! : ' + ip
        });
    }
    getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
        //compatibility for firefox and chrome
        var myPeerConnection = (<any>window).RTCPeerConnection || (<any>window).mozRTCPeerConnection || (<any>window).webkitRTCPeerConnection;
        var pc = new myPeerConnection({
            iceServers: []
        }),
            noop = function () { },
            localIPs = {},
            ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
            key;

        function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
        }
        //create a bogus data channel
        pc.createDataChannel("");
        // create offer and set local description
        pc.createOffer(function (sdp) {
            sdp.sdp.split('\n').forEach(function (line) {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });
            pc.setLocalDescription(sdp, noop, noop);
        }, noop);
        //listen for candidate events
        pc.onicecandidate = function (ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
    }
    deleteConfig(ip) {
        this.ipservice.deleteIp(ip).subscribe()
    }
    getConfigs() {
        this.ipservice.getIps().subscribe(config => {
            this.configs = config
        })
    }
}