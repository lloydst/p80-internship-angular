import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Message } from '../../../models/message';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';
/**
 * event component: here admin's can add and delete messages or go to the detail page to edit
 */
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class AdminEventComponent implements OnInit {
  /**
   * binding
   */
data
/**
 * binding
 */
model
/**
 * binding
 */
event
/**
 * form group
 */
eventForm = new FormGroup({
  message: new FormControl(),
  showFrom: new FormControl(),
  showTill: new FormControl(),
  imgUrl: new FormControl(),
  id: new FormControl()
});
/**
 * constructor
 * @param dataService for crud operations
 */
  constructor(private dataService: DataService) { }
  /**
   * function to create a new message/event
   * @param mssg 
   * @param from 
   * @param untill 
   * @param imgClass 
   * @param imgBoolean 
   * @param id
   */
  newMessage(mssg, from, untill, imgClass, imgBoolean:boolean, id) {
    this.model = new Message(mssg, from, untill, imgClass, imgBoolean, id);
  }
  /**
   * on load
   */
  ngOnInit() {
    this.getData()
  }

  /**
   * creates a message
   * @param mssg message/events
   * @param from time its shown from
   * @param untill time its can be shown till
   * @param iClass adds a background img if there
   * @param iBoolean boolean whether it has a class
   * @param id identifier to update/delete
   */
  create (mssg: String, from: String, untill: String, iClass: String, iBoolean: Boolean, id:String) { // need to add validator to from/untill fields
    var str = /([0-9])/g
    var untillStr = untill.match(str)
    var fromStr = from.match(str)
    console.log(untillStr, fromStr)
    var newNow = ''
      var newFrom = ''
      var newTill = ''
    for (let i =0; i <= 12; i++) {
      
      newFrom = newFrom+fromStr[i]
      newTill =newTill+untillStr[i]
      if(newTill<newFrom || i <= 12) {
        console.log('de data klopen niet als je doorgaat zal de event component ze automatisch omdraaien waneer deze component geladen word')
      }
    }
    
    this.dataService.createMessage({
      message: mssg,
      showFrom: from,
      showTill: untill,
      imgLink: iClass, 
      img:iBoolean,
      identifier: id}).subscribe(
        data => {
          // refresh the list
          this.getData();
        },
        error => {
          console.error("Error creating message!");
          return error//Observable.throw(error);
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
   * checks if the checkbox is checked
   * @param checked
   */
  check($event){
    $('#imgBoolean').change(function(){ alert($('#imgBoolean').attr('checked'));})
  }
  /**
   * updates a old message with new contents and or more time
   * @param id message to update
   * @param newMessage new text
   */
  update( id, newMessage) {
    return 'update'
  }
  /**
   * deletes a message
   * @param message message to delete
   */
  delete( message ) {
    if (confirm("Are you sure you want to delete " + message.identifier + "?")) {
            this.dataService.deleteMessage(message.identifier).subscribe(
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
