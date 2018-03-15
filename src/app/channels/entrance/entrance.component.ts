import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../../services/data.service';
import { Website } from '../../models/website';
import { Observable } from "rxjs/Rx"
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {
  today = new Date();
  hour = this.today.getHours(); // returns a number between 0 and 23 (23:59 still returns only 23)
  //hour = 16 // test variable  < 16 voor loop test >16 voor travel info > 17 what ya doin here
  // this controls visablity 
  title: string = 'My first AGM project';
  lat: number = 52.363072;
  lng: number = 4.97827;
  time;
  data: any
  res:any
  result: any
  constructor(
    private dataService: DataService,
    public http: HttpClient
    
  ) {
    
   }
  
  ngOnInit() {
    this.getData()
    this.checktime()
  
  }
  
  getData() {
    this.dataService.getAll().subscribe(
      res => {this.data = res})
  }
  
  checktime() {
    if(this.hour > 17) { // 16h = 4pm
      
      console.log('no 1 should be working')
      return this.time = 'past 6'
    } else if(this.hour > 15) {
      
      
      console.log('display travel info')
      return this.time = true ;
    } else if(this.hour < 15) { 
      // for loop to loop through each url in websites to be used in window.open in a async manner
      console.log('loop') // not logging
      
      return this.time = false;
    } 
  }
}
setTimeout(() => {
  var arrayOfUrls = []
  var urls = document.querySelectorAll("span#urls") // gives array 
  for(var i = 0; i < urls.length; i++) {
    //get value of urls
    var urlsArray = urls[i].innerHTML// acts like looping through one and returns all urls
    // setInterval( function() {window.open(urlsArray).close()}, 500);// opens all of them at once
    
      console.log(urlsArray)
  }
  //console.log(urls)
  
}, 3000);
  