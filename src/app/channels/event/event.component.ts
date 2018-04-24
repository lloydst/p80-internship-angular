import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message';
import { Observable } from "rxjs/Rx"
/**
 * event component
 */
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  /**
   * for binding
   */
message: any;
/**
 * constructor to make data service available in this component
 * @param dataService service for all crud requests to the api
 */
  constructor(
    private dataService: DataService) { }
/**
 * on load
 */
  ngOnInit() {
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
