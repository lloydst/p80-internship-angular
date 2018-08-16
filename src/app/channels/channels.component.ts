import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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

export class ChannelsComponent implements OnInit, OnDestroy {
    /**
     * title to set
     */
    title = 'control';
    /**
     * ip to get from api
     */
    ipAddress: string;
    /**
     * ip config from db
     */
    ipConfig;
    /**
     * if in production and a ip config exist navigate to the corresponding ip
     */
    singleIp;
    /**
     * for template binding
     */
    channel;
   /**
    * constructor
    * @param http http client
    * @param router angular router
    * @param data dataservice
    * @param titleService title service
    * @param ipService ip service
    */
    constructor(
        private http: HttpClient,
        public router: Router,
        private data: DataService,
        private titleService: Title,
        private ipService: IpService
    ) {
        this.http.get<{ ip?: string }>('https://jsonip.com')
            .subscribe(ipdata => {
                this.ipAddress = ipdata.ip;
                // console.log(this.ipAddress)
                this.getSingleIp(ipdata.ip);
            });
    }
    /**
     * gets the channels from db
     */
    getRoutes() {
        this.data.getChannelContent().subscribe(doc => {
            this.channel = doc;
        });
    }
    /**
     * change the title of the application
     * @param newTitle title: string to change it too
     */
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    /**
     * on load
     */
    ngOnInit() {
        this.setTitle('Channel control');
        this.getRoutes();
    }
    /**
     * on navigation away
     */
    ngOnDestroy() {
        this.setTitle('p80 interschip assignment');
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
    /**
     * navigate to reset the child component
     */
    stop() {
        this.router.navigateByUrl('');
    }
    /**
     * only if the environment is undefined this function will run due it not being fully implemented
     * (it doesn't get a computers network ip but gets the modem ip)
     */
    ipChannel() {  // first setup for routing in production
        if (environment.production === undefined) {
            if (this.singleIp.ip === this.ipAddress) { // if config exists got to channel
                this.redirectTo(this.singleIp.channel);
            } else {
                return `this ip doesn't have a config yet`;
            }
        }
    }
/**
 * gets a single ip form the database and if the env. = production route to the channel related to it if it excists
 * @param ip ip to get
 */
    getSingleIp(ip) {
        this.ipService.selectByIp(ip).subscribe(ipFromDb => {
            this.singleIp = ipFromDb;
            this.ipChannel();
        });

    }
}



