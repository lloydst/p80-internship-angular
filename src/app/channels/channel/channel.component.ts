import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Channel } from '../../models/channel';
import { Router } from '@angular/router';

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
    offline: boolean; // set by events
    /**
     * for binding
     */
    messages;
    /**
     * for binding
     */
    today;
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
            const myWindow = window.open('javascript:void window.focus()', 'channel', 'scrollbars=no');
            myWindow.close();
            return undefined;
        };
    }
    /**
     * just a function
     */
    log() {
        const url = this.router.url.split('/');
        this.currentchannel = url[2];
    }
    /**
     * on load
     */
    ngOnInit() {
        // this.log()
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
            const newDay = Number(this.month) + 1;
            newDay.toString();
            this.month = '0' + newDay;
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
        this.timeNow = `${this.year}-${this.month}-${this.day}T${this.hour}:${this.min}`;
    }
    /**
   * just a function
   */
    getRoutes() {
        this.data.getChannel(this.currentchannel).subscribe(res => {
            this.do = res;
        });
    }
    /**
     * get request
     */
    getMessages() {
        this.data.getAllMessage().subscribe(result => {
            this.messages = result;
        });
    }
    /**
    * opens tabs (needs refractoring)
    */
    openWindow() {
        let x = 0;
        const self = this;
        const messageArray = this.messages;
        function go() {
            self.offline = !window.navigator.onLine;
            let path = self.do[0].path[x].pathurl;
            const myWindow = window.open(path, 'channel'); // default = 0
            path = '/components/event';
            const offlineWindow = window.open(path, 'offline');
            myWindow.addEventListener('offline', () => {
                self.offline = true;
            });
            myWindow.addEventListener('online', () => {
                x = 0;
                self.offline = false;
            });

            // @overrule the loop if a message should get shown but will only over ride the loop route
            if (path === '/components/loop') {
                if (messageArray.length > 0) {
                    self.setTimeNow();
                    const str = /([0-9])/g;
                    for (let j = 0; j < messageArray.length; j++) {
                        const now = self.timeNow.match(str);
                        const from = messageArray[j].showFrom.match(str);
                        const till = messageArray[j].showTill.match(str);
                        let newNow = '';
                        let start = '';
                        let end = '';
                        for (let i = 0; i < 12; i++) { // 12 = timeNow.length
                            newNow = newNow + now[i];
                            start = start + from[i];
                            end = end + till[i];
                        }
                        if (Number(start) < Number(newNow) && Number(newNow) < Number(end)) {
                            path = '/components/event';
                            myWindow.location.href = path;
                        }
                    }
                }
            }
            if (self.offline) {
                x = 0;
                myWindow.close();
                offlineWindow.open(path, 'offline');
                // if offline see if the browser is online in a min
            }
            if (!self.offline) {
                // set to undefined so it will only run once
                self.offline = undefined;
                offlineWindow.close();
            }
            // if it is the loop component
            if (self.do[0].path.length === 1 && '/components/loop' === self.do[0].path[0].pathurl) {
                setTimeout(() => {
                    myWindow.close();
                    x = 0;
                    go();
                }, 354000); // self.do[0].path.delay //websites *20000 +14s?
            }
            // if x = the last path
            if (x === self.do[0].path.length - 1 && self.do[0].path.length > 1) {
                myWindow.close();
                self.getRoutes();
                x = 0;
            }
            if (x++ < self.do[0].path.length) { // if x < then the last path increase x by 1
                setTimeout(() => {
                    myWindow.close();
                    go();
                }, self.do[0].path[x - 1].delay); // x is already increased by 1 so x -1 = the delay that should be used
            }
            if (x === self.do[0].path.length) {
                myWindow.close();
                console.log('done');
            } else if (x++ < self.do[0].path.length) { // if should go next path go next path
                setTimeout(() => {

                    myWindow.close();
                    go();
                }, self.do[0].path[x - 1].delay);

                // because x gets incremented by 1 in the else if statement i have to subtract one to get the right delay
            }
            if (x === self.do[0].path.length) {
                console.log('done');
                self.getRoutes();
                x = 0;
                return x;
            }
        }
        go();
    }
}
