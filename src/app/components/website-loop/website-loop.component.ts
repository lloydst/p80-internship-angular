import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

/**
 * just setting it once
 */
const x = 0;

/**
 * entrance component
 */
@Component({
    selector: 'app-website-loop',
    templateUrl: './website-loop.component.html'
})
export class WebsiteLoopComponent implements OnInit {
    /**
     * for binding
     */
    websites: any;
    /**
     * for binding
     */
    res: any;
    /**
     * for binding
     */
    data: any = [];
    /**
     * constructor
     * @param newsService gets the latest news of nu.nl
     * @param dataService crud requests to the api
     * @param http http
     */
    constructor(

        private dataService: DataService,
        public http: HttpClient

    ) {
        window.onbeforeunload = function (e) {
            // this one triggers on redirect
            const loopWindow = window.open('javascript:void window.focus()', 'loop');
            loopWindow.close();
            return undefined;
            // doesnt always work
        };
    }
    /**
     * before the window gets closed target window with tag loop and close it
     */
    OnDestroy() {
        // this one should trigger on close
        const loopWindow = window.open('javascript:void window.focus()', 'loop');
        loopWindow.close();
        return undefined;
    }

    /**
     * gets all websites through the service
     */
    getData() {
        this.dataService.getAllWebsites().subscribe(
            res => {
                this.websites = res;
                this.openWindow();
            });
    }
    /**
     * gets all the "websites" from a hidden span so it gets saved in a array then it will loop
     * through them opening each of them with window.open with 1 min interval
     */
    openWindow() {
        let y = 0;
        const arrayOfUrls = [];
        for (let i = 0; i < this.websites.length; i++) {
            arrayOfUrls.push(this.websites[i].url);
        }

        function go() {
            const loopWindow = window.open(arrayOfUrls[y], 'loop'); // default = 0
            if (y === arrayOfUrls.length) { // if at the last website too visit reset the loop (so it hits the else-if below)
                y=0;
                loopWindow.close();
                go();
            } else if (y++ <= arrayOfUrls.length -1) {
                setTimeout(() => {
                    console.log(y)
                    loopWindow.close();
                    go();
                }, 10000); // might be better to set this time from the db
            }
        }
        go();
    }
    /**
     * on load
     */
    ngOnInit() {
        this.getData();
    }
}
