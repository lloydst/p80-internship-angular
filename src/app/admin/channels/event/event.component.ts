import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Message } from '../../../models/message';
import { Observable } from 'rxjs/observable';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class AdminEventComponent implements OnInit {
data
model
eventForm = new FormGroup({
  message: new FormControl(),
  showFrom: new FormControl(),
  showTill: new FormControl()
});
  constructor(private dataService: DataService) { }
  newMessage(mssg, from, untill) {
    this.model = new Message(mssg, from, untill);
  }
  ngOnInit() {
    this.getData()
  }
  create (mssg, from, untill) { // need to add validator to from/untill fields
    this.dataService.createMessage({
      message: mssg,
      showFrom: from,
      showTill: untill}).subscribe(
        data => {
          // refresh the list
          this.getData();
        },
        error => {
          console.error("Error creating message!");
          return Observable.throw(error);
       }
    )
  }
  getData() {
    this.dataService.getAllMessage().subscribe(
      res => {this.data = res})
  }
  update( id, newMessage) {
    return 'fake update'
  }
  delete( message ) {
    if (confirm("Are you sure you want to delete " + message.message + "?")) {
            this.dataService.deleteMessage(message._id).subscribe(
               data => {
                 // refresh the list
                 this.getData();
                 return true;
               },
               error => {
                 console.error("Error deleting message!");
                 return Observable.throw(error);
              }
            );
          }
  }
}
