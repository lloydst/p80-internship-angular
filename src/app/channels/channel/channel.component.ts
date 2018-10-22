import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Channel } from '../../models/channel';
import { Router } from '@angular/router';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

/**
 * can display every channel based on url
 */
@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html'
})
export class ChannelComponent implements OnInit {
    /**
     * for binding
     */
    today = new Date()
    /**
     * for binding
     */
    hour;

    /**
     * for binding
     */
    year;
    /**
     * for binding
     */
    month;

    /**
     * for binding
     */
    day;
    /**
    * for binding
    */
    min;
    /**
     * for binding 
     */
    timeNow = '';
    /**
     * binding
     */
    do;
    /**
     * binding
     */
    error;
    /**
     * for binding
     */
    pathArray=[]
    /**
     * for binding
     */
    currentchannel: string;
    /**
     * constructor
     * @param data dataservice
     * @param router used to get the current url
     */
    constructor(
        private data: DataService,
        private router: Router
    ) {
        window.onbeforeunload = function (e) {
            var myWindow = window.open('javascript:void window.focus()', 'channel', 'scrollbars=no');
            myWindow.close();
            return undefined;
        };
    }
    /**
     * getting the current channel out of the url
     */
    log() {
        var url = this.router.url.split('/');
        this.currentchannel = url[2];
    }
    /**
     * gets current channel
     * openWindow()
     */
    ngOnInit() {
        this.log();
        this.getRoutes();
        setTimeout(() => {
            this.openWindow();
        }, 200);

    }
    
    /**
     * get the paths of the channel and sets viewable array
     */
    getRoutes() {
        this.data.getChannel(this.currentchannel).subscribe(res => {
            this.do = res;
            this.setPathArray() // makes shure that on init as well as when done it resets the pathArray
        })

    }
    /**
     * redirect function
     */
    redirectTo(uri) {
        this.router.navigate([uri]);
    }
    /**
    * just a function
    */
    getToday() {
        this.today = new Date
        var dayOfWeek
        //console.log(today.getDay())
        switch (this.today.getDay()) {
            case 1:
                dayOfWeek = 'monday'
                break;
            case 2:
                dayOfWeek = 'tuesday'
                break;
            case 3:
                dayOfWeek = 'wednesday'
                break;
            case 4:
                dayOfWeek = 'thursday'
                break;
            case 5:
                dayOfWeek = 'friday'
                break;
            case 6:
                dayOfWeek = 'saturday'
                break;
            case 7:
                dayOfWeek = 'sunday'
                break;
            default:
                break;
        }
        return dayOfWeek
    }
    /**
     * checks if the path[x] should be visable
     * @param x number
     */
    getTime(x) {
        var timefrom = Number(this.do[0].path[x].show.timefrom.substring(0, 2) + this.do[0].path[x].show.timefrom.substring(3, 5));
        var timetill = Number(this.do[0].path[x].show.timetill.substring(0, 2) + this.do[0].path[x].show.timetill.substring(3, 5));
        // have to convert these numbers to strings first so '13' + '16' = 1316 instead of 29 since i get strings from the database
        var hours = this.today.getHours().toString()
        var minutes = this.today.getMinutes().toString()
        //if minute less then 10 it will only be 4 instead of 04 now thats fixed.
        if (minutes.length < 2) {
            minutes = '0' + minutes
            console.log('new minute value (was less then ten added a 0 in front')
        }
        var timeNow = Number(hours + minutes)
        //console.log(timefrom, timeNow, timetill)

        if (timefrom <= timeNow && timetill >= timeNow) {
            // comparing 1200 -1259 so that 1259-1302 would work as well
            console.log(timefrom, timeNow, timetill)
            return true
        } else {
            console.log(timefrom, timeNow, timetill)
            return false
        }
    }
    /**
     * creates pathArray this array is only filled with paths that should be viewable at the time this function starts (it doesnt check while looping)
     */
    setPathArray() {
        this.pathArray = []
        for (const path in this.do[0].path) {
            if (this.do[0].path.hasOwnProperty(path)) {
                const element = this.do[0].path[path];
                //console.log(element) // every paths
                if (element.show.allways) {
                    //console.log('should display always')
                    // should always be viewed
                    this.pathArray.push(element)
                }
                else if (element.show.days[this.getToday()]) {
                    console.log('should display today')
                    if (this.getTime(path)) {
                        //console.log('should display at this time')
                        // should be viewed
                        this.pathArray.push(element)
                    } else {
                        //console.log("shouldn't display at this time")
                    }
                } 
            }
        }
        return this.pathArray;
    }
    /**
     * opens the window then opens the next then restarts
     */
    openWindow() {
        this.error
        var x = 0;
        var self = this // REQUIRED FOR CHECK TIME
        //var messageArray = this.messages
        let offline = !window.navigator.onLine
        if (self.pathArray.length === 0) {
            //console.log('no paths for this channel')
            self.error = 'you cant run a channel without slides! go to admin to add some' // the return is so it doesnt run the rest of the function
            alert(self.error)
            self.redirectTo('channels') // waits for the alert to fire first
        }
        function go() {
            //console.log(self.pathArray) // just to check it resets every time it doesnt get longer
            // defined here or else it would open a blank page
            var path = self.pathArray[x].pathurl
            var myWindow = window.open(path, "channel")
            // created a new array of objects that should be viewed
            //console.log(self.pathArray)

            if (x === self.pathArray.length - 1) {
                setTimeout(() => {
                    //myWindow.close();
                    self.getRoutes();
                    console.log(x + 1, self.pathArray[x].delay * 1000, 'done');
                    x = 0;
                    go();
                }, self.pathArray[x - 1].delay * 1000);

            } else if (x++ < self.pathArray.length - 1) { // if x < then last path increase x by 1
                setTimeout(() => {
                    console.log(x, self.pathArray[x].componentName )
                    go();
                    //console.log(x)//, self.pathArray[x - 1].delay * 1000);
                }, self.pathArray[x - 1].delay * 1000); // x is already increased by 1 so x -1 = the delay that should be used
            }
        }
        go()
    }
}
