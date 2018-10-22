import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';


/**
 * meeting component
 */
@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    // schemas: [NO_ERRORS_SCHEMA]
})
export class MeetingComponent implements OnInit {
    /**
     * for binding
     */
    meeting: any = [0];
    /**
     * for binding
     */
    now = new Date
    /**
     * for binding
     */
    hour1 = '0' + this.now.getHours()

    /**
     * for binding
     */    
    hours = this.hour1.slice(-2)

    /**
     * for binding
     */    
    min1 = '0' + this.now.getMinutes()

    /**
     * for binding
     */    
    minutes = this.min1.slice(-2)

    /**
     * for binding
     */    
    currentMeeting: boolean

    /**
     * for binding
     */    
    startTimeArray = []

    /**
     * for binding
     */
    accessToken: any = [];
    /**
     * constructor
     * @param data data service
     * @param auth auth service (returns api key)
     * @param cookieService for setting retrieving cookie
     */
    constructor(
        private data: DataService,
        private auth: AuthService,
        private cookieService: CookieService
    ) { }
    /**
     * gets auth token then calls the data service to get the calendar
     */
    ngOnInit() {
        this.auth.getLoggedIn().subscribe(res => {
            this.accessToken = res;
            //console.log(this.accessToken)
            this.cookieService.set('access_token', this.accessToken.access_token);
            var cookie = this.cookieService.get('access_token')
            this.data.getCalendar(cookie).subscribe(resp => {
                this.meeting = [resp];
                this.checkCanceled()
                this.sortByTimeDate()
                this.setCurrentMeeting()
            });

        });
    }
    /**
     * checks each meeting if it has the status of canceled if true remove it from the array
     */
    checkCanceled() {
        for (let check = 0; check < this.meeting[0].value.length; check++) {
            const element = this.meeting[0].value[check].isCancelled;
            if (element) {
                this.meeting[0].value.splice(check, 1)
            }
        }
        return this.meeting // should have removed those with status canceled
    }
    /**
     * sorts the meeting
     */
    sortByTimeDate() {
        this.meeting[0].value.sort(function (a, b) {
            //even though this shows as a error it works
            let c: any
            let d: any
            c = new Date(b.start.dateTime)
            d = new Date(a.start.dateTime)
            var tmp = c - d
            return tmp
        })
        console.log(this.meeting)

    }
    /**
     * checks if a meeting is ongoing or has too happen
     * @returns boolean
     */
    setCurrentMeeting() {
        var current = Number(this.hours + this.minutes)
        var start = Number(this.meeting[0].value[this.meeting[0].value.length - 1].start.dateTime.substring(11, 13)
            + this.meeting[0].value[this.meeting[0].value.length - 1].start.dateTime.substring(14, 16))

        var end = Number(this.meeting[0].value[this.meeting[0].value.length - 1].end.dateTime.substring(11, 13)
            + this.meeting[0].value[this.meeting[0].value.length - 1].end.dateTime.substring(14, 16))

        // doesn't take date in account only time
        if (current > start && current < end) {
            this.currentMeeting = true
        } else {
            this.currentMeeting = false
        }

    }
}
