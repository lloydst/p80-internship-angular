import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
// test= window.open('https://google.com') works
message
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.dataService.getAllMessage().subscribe(
      res => {this.message = res})
    
  }
}
