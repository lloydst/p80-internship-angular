import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

/**
 * support component
 */
@Component({
    selector: 'app-support',
    templateUrl: './support.component.html'
})
export class SupportComponent implements OnInit {
    
    /**
     * binding
     */
    data;
    /**
     * uses the current url to select the project
     */
    currentUrl;
    /**
     * constructor
     * @param ticketservice ticket service
     * @param router router to get url
     */
    constructor(
        private ticketservice: TicketService,
        private router: Router) { }
    /**
     * on init wrapper
     */
    ngOnInit() {
        this.getTickets();
        this.geturl();
    }
    /**
     * gets current url and has some transformation happen so only the projectname is used
     */
    geturl() {
        this.currentUrl = this.router.url.split('/')[3];
    }
    /**
     * get request
     */
    getTickets() {
        this.ticketservice.getTickets().subscribe(async (data) => {
            this.data = data;
        });
    }
}
