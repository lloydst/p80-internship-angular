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
messages: any
  /**
   * for binding
   */
  today = new Date();
  /**
   * for binding
   */
  hour = this.today.getHours(); // returns a number between 0 and 23 (23:59 still returns only 23)
  //  hour = 16 // test variable  < 16 voor loop test >16 voor travel info > 17 what ya doin here
 
  /**
   * for binding
   */
  year = this.today.getFullYear()
  /**
   * for binding
   */
  month = this.getMonth()
  
  /**
   * for binding
   */
  day = this.today.getDate() 
  /**
  * for binding
  */
  min = this.today.getMinutes()
  /**
   * for binding
   */
   //matches messages time from and untill date "2018-04-18T06:09"
  timeNow = ""+this.year+"-"+this.month+"-"+this.day+"T"+this.hour+":"+this.min+""
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
    this.getMessages()
    setTimeout(() => {
      this.interuptLoop()
    }, 400);
    
  }
  /**
   * gets the month and adds a 0 if below 10
   */
  getMonth() {
    var tmp = this.today.getMonth() +1
    if(Number(tmp)<10) {
      return '0'+ tmp
    } else {
      return tmp
    }
  }
  /**
   * interupts the loop
   */
  interuptLoop() {
    var str = /([0-9])/g
    //console.log(this.messages)
    for(let j = 0; j< this.messages.length; j++){
      var now = this.timeNow.match(str)
      var from = this.messages[j].showFrom.match(str)
      var till = this.messages[j].showTill.match(str)
      var newNow = ''
      var newFrom = ''
      var newTill = ''
      for (let i =0; i < 12; i++) {
        newNow = newNow+now[i]
        newFrom = newFrom+from[i]
        newTill =newTill+till[i]

      }
      if(Number(newFrom) < Number(newNow) && Number(newNow) < Number(newTill)) {  // while should be shown change it to shown
        this.dataService.updateMessage(this.messages[j].identifier, {"img":true}).subscribe()
        this.getMessages()
        // returning anything here wont interupt loop
      }else if(Number(newFrom) < Number(newNow) && Number(newNow) > Number(newTill)) {
        this.dataService.deleteMessage(this.messages[j].identifier).subscribe()
        this.getMessages()
      }else if(Number(newFrom) >= Number(newNow) && Number(newNow) < Number(newTill)) {
        this.dataService.updateMessage(this.messages[j].identifier, {"img":false}).subscribe()
        this.getMessages()
      } else if(Number(newTill) < Number(newFrom)){ // showTill < showFrom need to write validation so this cannot happen for now it swaps them
        this.dataService.updateMessage(this.messages[j].identifier, {"img":false, "showFrom":this.messages[j].showTill, "showTill":this.messages[j].showFrom}).subscribe()
        console.log('err showFrom is later then showTill i swapped them for you')
        this.getMessages()
      }

    }
  }
  /**
   * gets all messages using the service and returns then as object
   */
  getMessages() {
    this.dataService.getAllMessage().subscribe(
    res => {this.messages = res})
    
}
  
}
