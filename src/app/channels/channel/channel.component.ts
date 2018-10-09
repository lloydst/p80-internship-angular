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
    messages;
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
pathArray =[]
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
     * just a function
     */
    log() {
        var url = this.router.url.split('/');
        this.currentchannel = url[2];
    }
    /**
     * on load
     */
    ngOnInit() {
        this.log();
        this.getRoutes();
        this.getMessages();
        setTimeout(() => {
            this.openWindow();
        }, 200);

    }
    /**
     * sets the 'time' 
     */
    setTimeNow() {
        this.today = new Date();
        this.hour = this.today.getHours().toString();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth().toString();
        this.day = this.today.getDate().toString();
        this.min = this.today.getMinutes().toString();

        if (Number(this.month) < 10) {
            var newDay = Number(this.month) + 1;
            newDay.toString();
            this.month = "0" + newDay;
        }
        if (Number(this.day) < 10) {
            this.day = '0' + this.day;
        }
        if (Number(this.hour) < 10) {
            this.hour = '0' + this.hour;
        }
        if (Number(this.min) < 10) {
            this.min = '0' + this.min;
        }
        this.timeNow = "" + this.year + "-" + this.month + "-" + this.day + "T" + this.hour + ":" + this.min + "";
    }
    /**
     * just a routing function
     */
    getRoutes() {
        this.data.getChannel(this.currentchannel).subscribe(res => {
            this.do = res;
            this.setPathArray()
        })
        
    }
    /**
     * get request
     */
    getMessages() {
        this.data.getAllMessage().subscribe(result => {
            this.messages = result
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
    setPathArray() {
    this.pathArray = []
    for (const path in this.do[0].path) {
        if (this.do[0].path.hasOwnProperty(path)) {
            const element = this.do[0].path[path];
            //console.log(element) // every paths
            if (element.show.allways) {
                console.log('should display always')
                // should always be viewed
                this.pathArray.push(element)
            }
            if (element.show.days[this.getToday()]) {
                console.log('should display today')
                if (this.getTime(path)) {
                    console.log('should display at this time')
                    // should be viewed
                    this.pathArray.push(element)
                } else {
                    console.log("shouldn't display at this time")
                }
            } else {
                // this one shouldnt be viewed
                console.log("shouldn't display today")
                if (this.getTime(path)) {
                    console.log('should display at this time')
                }
            }
        }
    }
    }

    openWindow() {
        this.error
        var x = 0;
        var self = this // REQUIRED FOR CHECK TIME
        var messageArray = this.messages
        let offline = !window.navigator.onLine
        if (self.pathArray.length === 0) {
            console.log('no paths for this channel')
            self.error = 'you cant run a channel without slides! go to admin to add some' // the return is so it doesnt run the rest of the function
            alert(self.error)
            self.redirectTo('channels') // waits for the alert
        }
        function go() {
            console.log(self.pathArray) // just checking it doesnt get longer
            // defined here or else it would open a blank page
            var path = self.pathArray[x].pathurl
            var myWindow = window.open(path, "channel")
            // created a new array of objects that should be viewed
            //console.log(self.pathArray)
            
            if (x === self.pathArray.length -1) {
                setTimeout(() => {
                    //myWindow.close();
                    self.getRoutes();
                    console.log(x + 1, self.pathArray[x].delay * 1000, 'done');
                    x = 0;
                    go();
                }, self.pathArray[x- 1].delay * 1000);

            } else if (x++ < self.pathArray.length - 1) { // if x < then last path increase x by 1
                setTimeout(() => {
                    console.log(x, self.pathArray[x].delay * 1000)
                    go();
                    //console.log(x)//, self.pathArray[x - 1].delay * 1000);
                }, self.pathArray[x - 1].delay * 1000); // x is already increased by 1 so x -1 = the delay that should be used
            }
        }
        go()
    }
}
            /**
             * 
            console.log(self.do[0].path.length === x)
            if (self.do[0].path.length === x) {
                console.log('oopsie x should have been 0')
                x = 0;
                go()
            }
            var path = self.do[0].path[x].pathurl
            var myWindow = window.open(path, "channel") // default = 0
            myWindow.opener = null;
            // offline overrule
            //console.log(self.do[0].path.length, x)

            if (!window.navigator.onLine) {
                path = '/components/event'
                myWindow.location.href = path
                // if offline see if the browser is online in a min
                setTimeout(() => {
                    go()
                }, 60000);
            } else {
                // @overrule the loop if a message should get shown
                if (path == '/components/loop') {
                    if (messageArray.length > 0) {
                        self.setTimeNow()
                        const str = /([0-9])/g
                        for (let j = 0; j < messageArray.length; j++) {
                            let now = self.timeNow.match(str)
                            let from = messageArray[j].showFrom.match(str)
                            let till = messageArray[j].showTill.match(str)
                            let newNow = ''
                            let start = ''
                            let end = ''
                            for (let i = 0; i < 12; i++) { // 12 = timeNow.length
                                newNow = newNow + now[i]
                                start = start + from[i]
                                end = end + till[i]
                            }
                            if (Number(start) < Number(newNow) && Number(newNow) < Number(end)) {
                                path = '/components/event'
                                myWindow.location.href = path
                            }
                        }
                    }
                }

                /**
                 * if allways run normal
                 * if not allways=> if day matches=> if time run normal
                 * else x++ (skip)
                 *
            if (self.do[0].path[x].show.allways) {
                console.log('allways =' + self.do[0].path[x].show.allways)
                if (x === self.do[0].path.length - 1) {
                    setTimeout(() => {
                        //myWindow.close();
                        self.getRoutes();
                        console.log(self.do[0].path[self.do[0].path.length - 1].delay * 1000, 'done');
                        x = 0;
                        go();
                    }, self.do[0].path[self.do[0].path.length - 1].delay * 1000);

                } else if (x++ < self.do[0].path.length - 1) { // if x < then last path increase x by 1
                    setTimeout(() => {
                        //myWindow.close();
                        go();
                        console.log('increased by 1 =' + x, self.do[0].path[x - 1].delay * 1000);
                    }, self.do[0].path[x - 1].delay * 1000); // x is already increased by 1 so x -1 = the delay that should be used
                }
            } else if (!self.do[0].path[x].show.allways) {
                console.log('allways = false or undefined')


                if (self.getTime(x)) {
                    console.log('today is and that matches from self.do[0].path[x].show.days]')
                    //correct day
                    var timefrom = Number(self.do[0].path[x].show.timefrom.substring(0, 2) + self.do[0].path[x].show.timefrom.substring(3, 5));
                    var timetill = Number(self.do[0].path[x].show.timetill.substring(0, 2) + self.do[0].path[x].show.timetill.substring(3, 5));
                    // have to convert these numbers to strings first so '13' + '16' = 1316 instead of 29 since i get strings from the database
                    var hours = self.today.getHours().toString()
                    var minutes = self.today.getMinutes().toString()
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
                        if (x === self.do[0].path.length) {
                            setTimeout(() => {
                                //myWindow.close();
                                self.getRoutes();
                                console.log(self.do[0].path[self.do[0].path.length - 1].delay * 1000, 'done');
                                x = 0;
                                go();
                            }, self.do[0].path[self.do[0].path.length - 1].delay * 1000);

                        } else if (x++ < self.do[0].path.length - 1) { // if not the right time increase x by 1
                            setTimeout(() => {
                                console.log(self.do[0].path.length - 1)
                                go();
                                console.log('increased by 1 =' + x, self.do[0].path[x - 1].delay * 1000);
                            }, self.do[0].path[x - 1].delay * 1000); // x is already increased by 1 so x -1 = the delay that should be used
                        }
                        // needs a extra check for the length of the path if 0 and if 1 but not shown and should really split the code up (150 lines...)
                    } else {
                        console.log('should not display at this time today')
                        x++
                        go()
                    }
                } else {
                    x++
                    console.log('should not display today')
                    go()
                }
            } else {
                console.log('should not display increasing x by 1 and calling go')
                go()
            }
        }
    }
    */
