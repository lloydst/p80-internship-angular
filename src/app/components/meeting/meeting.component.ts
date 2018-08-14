import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';



/**
 * meeting component
 */
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  //schemas: [NO_ERRORS_SCHEMA]
})
export class MeetingComponent implements OnInit {
  /**
   * for binding
   */
  
  meeting:any =[0]
  //firstEvent = this.meeting[0].events[(this.meeting[0].events.length -1)]
  
  /**
   * for binding
   */
  loginStatus:any=[]
  /**
   * constructor
   */
  constructor(
    private data: DataService,
    ) { }
  /**
   * on load
   */

  ngOnInit() {
    this.data.getLoggedIn().subscribe(res=>{
      this.loginStatus= res
      this.data.getCalendar().subscribe(res=>{
        this.meeting= [res]
        
      })
      
    })
    
    this.ifNotLoggedIn()
  }
  /**
   * if the signInUrl is there it means no one is logged in, so a window gets opened to login
   */
  ifNotLoggedIn() {
    setTimeout(() => {
      if(this.loginStatus.signInUrl) {
        var login = window.open(this.loginStatus.signInUrl,'login') 
        // due to cross origin i cant do more then this need to find a way to auto login
      } 
    }, 200);
  }
  
     }