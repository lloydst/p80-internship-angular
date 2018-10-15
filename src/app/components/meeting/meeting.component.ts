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
    meeting: any =[0];
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
            var cookie =this.cookieService.get('access_token')
            this.data.getCalendar(cookie).subscribe(resp => {
                this.meeting = [resp];
                console.log(this.meeting)
            });
            
        });
    }
    /**
     * if the signInUrl is there it means no one is logged in, so a window gets opened to login
     */
}
