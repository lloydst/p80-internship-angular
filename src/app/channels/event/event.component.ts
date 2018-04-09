import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
message
  constructor(

    private dataService: DataService) { }

  ngOnInit() {
    /**
     * implements get data on start
     */
    this.getData()
  }

  /**
   * gets all messages using the service and returns then as object
   */
  getData() {
   
    this.dataService.getAllMessage().subscribe(
      res => {this.message = res})
    
  }
}
