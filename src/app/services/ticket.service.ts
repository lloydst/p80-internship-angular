import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * ticket service
 */
@Injectable({
  providedIn: 'root'
})

export class TicketService {
    /**
     * for http calls
     * @param http HttpClient
     */
  constructor(private http: HttpClient) { }
/**
 * the actual get call
 */
  getTickets() {
    return this.http.get('/api/jira');
    
  }
  
}
