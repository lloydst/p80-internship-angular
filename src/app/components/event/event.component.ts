import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

/**
 * event component
 */
@Component({
    selector: 'app-event',
    templateUrl: './event.component.html'
})

export class EventComponent implements OnInit {
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
     * sets this.timeNow to be the same format as the value returned by the db
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
        this.timeNow = '' + this.year + '-' + this.month + '-' + this.day + 'T' + this.hour + ':' + this.min + '';
    }


    /**
     * constructor to make data service available in this component
     * @param dataService service for all crud requests to the api
     */
    constructor(
        private dataService: DataService) { }
    /**
     * on load
     */
    ngOnInit() {
        this.getMessages();
        // does need to be shorter then the window.open of entrance
        setTimeout(() => {
            this.checkIfDisplayed();
        }, 500);

    }
    /**
     * checks if a message should be displayed (also updates the visability of a message by changing the img boolean)
     */
    checkIfDisplayed() {
        this.setTimeNow();
        const str = /([0-9])/g;
        for (let j = 0; j < this.messages.length; j++) {
            const now = this.timeNow.match(str);
            const from = this.messages[j].showFrom.match(str);
            const till = this.messages[j].showTill.match(str);
            let newNow = '';
            let start = '';
            let end = '';
            for (let i = 0; i < 12; i++) { // 12 = timeNow.length
                newNow = newNow + now[i];
                start = start + from[i];
                end = end + till[i];
            }


            if (Number(start) < Number(newNow) && Number(newNow) < Number(end)) {  // while should be shown change it to shown
                if (this.messages[j].img === true) {
                    setTimeout(() => {
                        this.checkIfDisplayed();
                    }, 60000);
                } else {
                    this.dataService.updateMessage(this.messages[j].identifier, { 'img': true }).subscribe();
                    this.getMessages();
                }
            } else if (Number(start) < Number(newNow) && Number(newNow) > Number(end)) { // while from < now & now > shown till delete
                console.log(Number(start) + '<' + Number(newNow) + '&' + Number(newNow) + '>' +
                Number(end) + 'both start and end time/date are less then now');
                this.dataService.deleteMessage(this.messages[j].identifier).subscribe();
                this.getMessages();

            } else if (Number(start) >= Number(newNow) && Number(newNow) < Number(end)) { // shouldnt be shown yet
                if (this.messages[j].img === false) {
                    setTimeout(() => {
                        this.checkIfDisplayed();
                    }, 60000);
                } else {
                    this.dataService.updateMessage(this.messages[j].identifier, { 'img': false }).subscribe();
                    this.getMessages();
                }

            } else if (Number(end) < Number(start)) {
                // showTill < showFrom need to write validation so this cannot happen for now it swaps them
                console.log(Number(start) + '<' + Number(end) + ' turning them around for you');
                this.dataService.updateMessage(this.messages[j].identifier,
                    { 'img': false, 'showFrom': this.messages[j].showTill, 'showTill': this.messages[j].showFrom }).subscribe();
                this.getMessages();

            }
        }
    }
    /**
     * gets all messages using the service and returns then as object
     */
    getMessages() {
        this.dataService.getAllMessage().subscribe(
            res => {
                this.messages = res;
            });
    }
}
