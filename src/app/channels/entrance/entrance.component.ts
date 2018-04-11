import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../../services/data.service';
import { Website } from '../../models/website';
import { Observable } from "rxjs/Rx"
import * as $ from 'jquery';
/**
 * just setting it once
 */
var x = 0;

/**
 * entrance component
 */
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})

export class EntranceComponent implements OnInit {
  /**
   * for binding
   */
  today = new Date();
  /**
   * for binding
   */
  hour = this.today.getHours(); // returns a number between 0 and 23 (23:59 still returns only 23)
  //hour = 16 // test variable  < 16 voor loop test >16 voor travel info > 17 what ya doin here
  /**
   * for binding
   */
  time;
  /**
   * for binding
   */
  ovTimes: any
  /**
   * for binding
   */
  websites: any
  /**
   * for binding
   */
  res:any
  /**
   * for binding
   */
  data: any = []
  /**
   * 
   * @param dataService crud requests to the api
   * @param http http
   */
  constructor(
    private dataService: DataService,
    public http: HttpClient
    
  ) {}
 /**
  * gets all websites through the service
  */
  getData() {
    this.dataService.getAllWebsites().subscribe(
      res => {this.websites = res})
  }
/**
 * returns either a bloolean or string based on time of day so that its only visable at the right time
 */
  checkTime() {
    console.log(this.hour)
    if(this.hour > 17) { // 16h = 4pm
      console.log('no 1 should be working')
      return this.time = 'past 6'
    } else if(this.hour > 15) {
      console.log('display travel info')
      return this.time = true ;
    } else if(this.hour <= 15) { 
      console.log('loop')
      setTimeout(() => {
        this.openWindow()
      }, 400);
      return this.time = false;
    } 
  }
  /**
   * gets all the "websites" from a hidden span so it gets saved in a array then it will loop
   * through them opening each of them with window.open with 1 min interval
   */
  openWindow() {
    var x = 0;
    //console.log(this.data)
    var arrayOfUrls =[]
    var url = document.querySelectorAll('span#urls')
    for (let i = 0; i < url.length; i++) {
      arrayOfUrls.push(url[i].innerHTML) 
    }
    // test array of urls
    // arrayOfUrls = ['url1','url2','url3']
      function go() {
        var myWindow = window.open(arrayOfUrls[x])
        if (x++ < arrayOfUrls.length - 1) {
          setTimeout(() => {
            myWindow.close()
            console.log(x)
            go()
          // change this number to change the time it switches between websites
          }, 60000);
        } else if(x == arrayOfUrls.length) {
          console.log('should be called last')
          myWindow.close()
          // location.reload()
        }
      }
      go();
  }
  /**
   * on load
   */
  ngOnInit() {

    this.getData()
    this.checkTime()
    // this.openWindow()
  }
  
}
