import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Title, SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
    * @param router angular Router
    * @param data data from dataService
    * @param titleService sets the title
    */
    constructor(
        private http: HttpClient,
        public router: Router,
        private data: DataService,
        private titleService: Title
    ) {
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
 

}



