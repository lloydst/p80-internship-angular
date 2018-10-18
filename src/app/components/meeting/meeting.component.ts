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
    now = new Date
    hour1 = '0'+this.now.getHours()
    hours =this.hour1.slice(-2)
    min1 = '0'+this.now.getMinutes()
    minutes = this.min1.slice(-2)
    currentMeeting:boolean
    startTimeArray =[]
    // firstEvent = this.meeting[0].events[(this.meeting[0].events.length -1)]
    /**
     * for binding
     */
    accessToken: any = [];
    /**
     * constructor
     */
    constructor(
        private data: DataService,
        private auth: AuthService,
        private cookieService: CookieService
    ) { }
    /**
     * on load
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
    checkCanceled() {
        for (let check = 0; check < this.meeting[0].value.length; check++) {
            const element = this.meeting[0].value[check].isCancelled;
            if(element){
                this.meeting[0].value.splice(check,1)
            }
        }
        //console.log(this.meeting)
        return this.meeting // should have removed those with status canceled
        //console.log(this.meeting[0].value.length)
    }
    sortByTimeDate() {
            this.meeting[0].value.sort(function(a,b){
                //even though this shows as a error it works
                let c:any
                let d:any
                c = new Date(b.start.dateTime)
                d = new Date(a.start.dateTime)
                var tmp = c - d
                return tmp
            })
            console.log(this.meeting)

    }
    setCurrentMeeting() {
        var current = Number(this.hours + this.minutes)
        var start = Number(this.meeting[0].value[this.meeting[0].value.length - 1].start.dateTime.substring(11, 13) 
        + this.meeting[0].value[this.meeting[0].value.length - 1].start.dateTime.substring(14, 16))

        var end = Number(this.meeting[0].value[this.meeting[0].value.length - 1].end.dateTime.substring(11, 13) 
        + this.meeting[0].value[this.meeting[0].value.length - 1].end.dateTime.substring(14, 16))

        // doesn't take date in account only time
        if(current > start && current < end) {
            this.currentMeeting =true
        } else {
            this.currentMeeting =false
        }

    }
}
/**
 * check if this.meeting[0].value[x].iscanceled
 */