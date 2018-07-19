import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { DataService } from '../../../services/data.service';
/**
 * admin channels content component
 */
@Component({
    selector: 'app-admin-channels-contents',
    templateUrl: './admin-channels-contents.component.html'
})
export class AdminChannelsContentsComponent implements OnInit {
    /**
     * for binding
     */
    channel
    /**
     * for binding
     */
    currentChannel
    /**
     * constructor
     * @param data data service
     * @param router the router
     */
    constructor(
        private data: DataService,
        private router: Router
    ) { }
    /**
     * checks url to see if a channel can get loaded
     */
    getCurrentChannel() {
        var url = this.router.url.split("/")
        this.currentChannel = url[3]
    }
    /**
     * on load
     */
    ngOnInit() {
        this.getCurrentChannel()
        this.getChannels()
    }
    /**
     * gets the channels from the api
     */
    getChannels() {
        this.data.getChannelContent().subscribe(data => {
            this.channel = data
        })
    }
    /**
     * forces reload of child component(wouldnt do that with routerlink)
     * @param uri channel to navigate to to edit or create
     */
    redirectTo(uri: string) {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() =>
            this.router.navigate(['admin/channels', uri]));
    }
    /**
     * delete channel function
     * @param obj channel to delete
     */
    delete(obj) {
        this.data.deleteChannel(obj).subscribe(() => {
            this.getChannels()
            this.redirectTo('')
        })
    }


}
