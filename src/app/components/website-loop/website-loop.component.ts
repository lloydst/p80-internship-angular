import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Website } from '../../models/website';
import { Observable } from "rxjs/Rx"
import * as $ from 'jquery';
import { NewsService } from '../../services/news.service';
import { WeatherService } from '../../services/weather.service';
/**
 * just setting it once
 */
var x = 0;

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
    websites: any
    /**
     * for binding
     */
    res: any
    /**
     * for binding
     */
    data: any = []
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
            var myWindow = window.open('javascript:void window.focus()', 'loop');
            myWindow.close()
            return undefined
        };
    }


    /**
     * gets all websites through the service
     * 
     */
    getData() {
        this.dataService.getAllWebsites().subscribe(
            res => { 
                this.websites = res
                this.openWindow()
             })
    }
    /**
     * gets all the "websites" from a hidden span so it gets saved in a array then it will loop
     * through them opening each of them with window.open with 1 min interval
     */
    openWindow() {
        var x = 0;
        var arrayOfUrls = []
        // Loop in this file not on html
        for (let i = 0; i < this.websites.length; i++) {
            arrayOfUrls.push(this.websites[i].url)
        }

        function go() {
            var myWindow = window.open(arrayOfUrls[x], 'loop') // default = 0

            if (x === arrayOfUrls.length) {
                myWindow.close()
            } else if (x++ <= arrayOfUrls.length) {
                setTimeout(() => {
                    myWindow.close()
                    go()
                    // change this number to change the time it switches between websites
                }, 20000); // 20 sec for each website this means it checks time every 15.01 min
            }
        }
        go()
    }
    /**
     * on load
     */
    ngOnInit() {
        this.getData()
    }
}
