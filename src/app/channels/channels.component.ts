import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IpService } from '../services/ip.service';
/**
 * channel component
 */
@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html'
})

export class ChannelsComponent implements OnInit {
    title = "control"
    ipAddress: string;
    ipConfig
    singleIp
    /**
     * for template binding
     */
    channel
    /**
     * constructor
     * @param router router gets imported to display content based on the url
     */
    constructor(
        private http: HttpClient,
        public router: Router,
        private data: DataService,
        private titleService: Title,
        private ipService: IpService
    ) {
        this.http.get<{ ip: string }>('https://jsonip.com')
            .subscribe(data => {

                this.ipAddress = data.ip
                console.log(this.ipAddress)
                this.getSingleIp(data.ip)
            })
    }
    /**
     * gets the channels from db
     */
    getRoutes() {
        this.data.getChannelContent().subscribe(doc => {
            this.channel = doc
        })
    }
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    /**
     * on load
     */
    ngOnInit() {
        this.setTitle("Channel control")
        this.getRoutes()
    }
    ngOnDestroy() {
        this.setTitle("p80 interschip assignment")
    }
    /**
     * force child reload
     * @param uri will navigate too /channels/uri
     */
    redirectTo(uri: string) {
        this.router.navigateByUrl('/channels', { skipLocationChange: true }).then(() =>
            this.router.navigate(['channels', uri]));
    }
    /**
     * force child reload
     * @param uri will navigate too /admin/contents/uri
     */
    goToNewChannel(uri: string) {
        this.router.navigateByUrl('/channels', { skipLocationChange: true }).then(() =>
            this.router.navigate(['admin', 'contents', uri]));
    }
    stop() {
        this.router.navigateByUrl('');
    }
    /**
     * routing based on ip in production
     * currently only logs some other pc or lloyds pc
     */
    ipChannel() {  // first setup for routing in production
        if (environment.production === true) {
            if (this.singleIp.ip === this.ipAddress) { // if config exists got to channel
                this.redirectTo(this.singleIp.channel);
            }
            else {
                return "this ip doesn't have a config yet"
            }
            
        }
    }

    getSingleIp(ip) {
        this.ipService.selectByIp(ip).subscribe(ipFromDb => {
            this.singleIp = ipFromDb
            this.ipChannel()
        })

    }
}



