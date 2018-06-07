import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

/**
 * meeting component
 */
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit {
  /**
   * for binding
   */
  
  meeting: any = []
  /**
   * for binding
   */
  loginStatus
  /**
   * constructor
   */
  constructor(
    private data: DataService,
    private http: HttpClient) { }
  /**
   * on load
   */

  ngOnInit() {
    this.data.getLoggedIn().subscribe(res=>{
      this.loginStatus= res
    })
    this.data.getCalendar().subscribe(res=>{
      this.meeting= [res]
    })
    this.ifNotLoggedIn()
  }
  /**
   * if the signInUrl is there it means no one is logged in so a window gets opened to login
   */
  ifNotLoggedIn() {
    setTimeout(() => {
      if(this.loginStatus.signInUrl) {
        var login = window.open(this.loginStatus.signInUrl,'login') 
        // due to cross origin i cant do more then this need to find a way to auto login
      } 
    }, 200);
  }
  /**
   * logout of graph with the use of a button
   */
  logOut() {
    this.data.logOut().subscribe()
       }
     }