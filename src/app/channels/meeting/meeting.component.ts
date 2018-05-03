import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
/**
 * meeting component
 */
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
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
constructor(private data: DataService) { }
/**
 * on load
 */
  ngOnInit() {
    this.data.getLoggedIn().subscribe(res=>{
      this.loginStatus= res
    })
    //this.data.getCalendar().subscribe(res=>{
    //  this.meeting= res
    //})
  }
  
}
