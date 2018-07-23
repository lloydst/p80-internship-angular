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
    messages
    /**
     * for binding
     */
    today
    /**
     * for binding
     */
    hour

    /**
     * for binding
     */
    year
    /**
     * for binding
     */
    month

    /**
     * for binding
     */
    day
    /**
    * for binding
    */
    min
    /**
     * for binding 
     */
    timeNow = ""
    /**
     * binding
     */
    do
    /**
     * binding
     */
    currentchannel: string
    /**
     * constructor
     */
    constructor(
        private data: DataService,
        private router: Router
    ) {
        window.onbeforeunload = function (e) {
            var myWindow = window.open('javascript:void window.focus()', 'channel','scrollbars=no');
            myWindow.close()
            return undefined
        };
    }
    /**
     * just a function
     */
    log() {
        var url = this.router.url.split('/')
        this.currentchannel = url[2]
        console.log(this.currentchannel)
    }
    /**
     * on load
     */
    ngOnInit() {
        this.log()
        this.getRoutes()
        this.getMessages()
        setTimeout(() => {
            this.openWindow()
        }, 200);

    }
    setTimeNow() {
        this.today = new Date();
        this.hour = this.today.getHours().toString();
        this.year = this.today.getFullYear()
        this.month = this.today.getMonth().toString()
        this.day = this.today.getDate().toString()
        this.min = this.today.getMinutes().toString()

        if (Number(this.month) < 10) {
            var newDay = Number(this.month) + 1
            newDay.toString()
            this.month = "0" + newDay
        }
        if (Number(this.day) < 10) {
            this.day = '0' + this.day
        }
        if (Number(this.hour) < 10) {
            this.hour = '0' + this.hour
        }
        if (Number(this.min) < 10) {
            this.min = '0' + this.min
        }
        this.timeNow = "" + this.year + "-" + this.month + "-" + this.day + "T" + this.hour + ":" + this.min + ""
    }
    /**
   * just a function
   */
    getRoutes() {
        this.data.getChannel(this.currentchannel).subscribe(res => {
            this.do = res
        })
    }
    getMessages() {
        this.data.getAllMessage().subscribe(result => {
            this.messages = result
        })
    }
    /**
    * just a function
    */
    openWindow() {
        var x = 0;
        var self = this // REQUIRED FOR CHECK TIME
        var messageArray = this.messages
        function go() {
            var path = self.do[0].path[x].pathurl
            var myWindow = window.open(path, "channel") // default = 0
            
            // @overrule the loop if a message should get shown
            if (path == '/components/loop') {
                if (messageArray.length > 0) {
                    self.setTimeNow()
                    var str = /([0-9])/g
                    for (let j = 0; j < messageArray.length; j++) {
                        var now = self.timeNow.match(str)
                        var from = messageArray[j].showFrom.match(str)
                        var till = messageArray[j].showTill.match(str)
                        var newNow = ''
                        var start = ''
                        var end = ''
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

            if (x == self.do[0].path.length) {
                myWindow.close()
                console.log('done')
            } else if (x++ < self.do[0].path.length) { // if should go next path go next path
                setTimeout(() => {

                    myWindow.close()
                    go()
                }, self.do[0].path[x - 1].delay);

                // because x gets incremented by 1 in the else if statement i have to subtract one to get the right delay
            }
            if (x == self.do[0].path.length) {
                console.log('done')
                self.getRoutes()
                x = 0
                return x
            }
            
        }
        go()
    }

}
