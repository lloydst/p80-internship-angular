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
  meeting
/**
 * constructor
 */
constructor(private data: DataService) { }
/**
 * on init
 */
  ngOnInit() {
    this.data.getCalendar().subscribe(res=>{this.meeting= res})
  }

}
