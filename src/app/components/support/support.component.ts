import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

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
    data
/**
 * some stuff goes here
 */
  constructor(private ticketservice: TicketService) { }
/**
 * fill
 */
  ngOnInit() {
      this.getTickets()
  }
  getTickets() {
    this.ticketservice.getTickets().subscribe(res=> {
        this.data = res
        
    })
  }
}
