import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../../services/data.service';
import { Website } from '../../models/website';
import { Observable } from "rxjs/Rx"
import * as $ from 'jquery';
var x = 0;
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {
  today = new Date();
  hour = this.today.getHours(); // returns a number between 0 and 23 (23:59 still returns only 23)
  //hour = 16 // test variable  < 16 voor loop test >16 voor travel info > 17 what ya doin here
  time;
  ovTimes: any
  websites: any
  res:any
  data: any = []
  constructor(
    private dataService: DataService,
    public http: HttpClient
    
  ) {}
 
  getData() {
    this.dataService.getAllWebsites().subscribe(
      res => {this.websites = res})
    
  }
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
  
  ngOnInit() {

    this.getData()
    this.checkTime()
    // this.openWindow()
  }
  
}
