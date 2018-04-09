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
  /**
   * creates a "message" document
   * @param mssg string shaped greeting
   * @param from time from when its shown
   * @param untill time untill it is no longer shown
   */
  create (mssg: String, from: String, untill: String) { // need to add validator to from/untill fields
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
  /**
   * gets all messages
   */
  getData() {
    this.dataService.getAllMessage().subscribe(
      res => {this.data = res})
  }
  /**
   * updates a old message with new contents and or more time
   * @param id message to update
   * @param newMessage new text
   */
  update( id, newMessage) {
    return 'fake update'
  }
  /**
   * deletes a message
   * @param message message to delete
   */
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
