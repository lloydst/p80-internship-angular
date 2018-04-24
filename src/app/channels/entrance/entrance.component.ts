import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../../services/data.service';
import { Website } from '../../models/website';
import { Observable } from "rxjs/Rx"
import * as $ from 'jquery';
import { NewsService } from '../../services/news.service';
import { WeatherService } from '../../services/weather.service';
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
   //matches message time from and untill date "2018-04-18T06:09"
  timeNow = ""+this.year+"-"+this.month+"-"+this.day+"T"+this.hour+":"+this.min+""
  
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
  news:any
  /**
   * for binding
   */
  weatherjson:any
  /**
   * for binding
   */
  res:any
  /**
   * for binding
   */
  data: any = []
  /**
   * constructor
   * @param newsService gets the latest news of nu.nl
   * @param dataService crud requests to the api
   * @param http http
   */
  constructor(
    private newsService: NewsService,
    private dataService: DataService,
    public http: HttpClient
    
  ) {}
 /**
  * gets all websites through the service
  * 
  */
  getData() {
    this.dataService.getAllWebsites().subscribe(
      res => {this.websites = res})
  }
  /**
   * gets messages for logic
   */
  getMessages() {
    this.dataService.getAllMessage().subscribe(
    res => {this.messages = res})
    
}
  /**
   * gets the nu.nl's rss feed
   */
  getNews() {
    this.newsService.getNews().subscribe(
      res => {this.news = res})
  }
  /**
   * makes sure this.today.getmonth() always returns 2 digits and never 
   * just a single one even if the day is less then 10
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
 * returns either a boolean or string based on time of day so that its only visable at the right time
 */
  checkTime() {
    if(this.hour > 17) { // past 6
      return this.time = 'past 6'
    } else if(this.hour > 15) { // 5-6 pm
      return this.time = true ;
    } else if(this.hour <= 15) { // loop
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
    var str = /([0-9])/g
     
    var x = 0;
    var self = this // REQUIRED FOR CHECK TIME
    var arrayOfUrls =[]
    var url = document.querySelectorAll('span#urls')
    for (let i = 0; i < url.length; i++) {
      arrayOfUrls.push(url[i].innerHTML) 
    }
    
    // test array of urls
    // arrayOfUrls = ['https://youtube.com','https://facebook.com','https://google.com']
    
    function go() {
      for(let j = 0; j< self.messages.length; j++){
        var now = self.timeNow.match(str)
        var from = self.messages[j].showFrom.match(str)
        var till = self.messages[j].showTill.match(str)
        var newNow = ''
        var newFrom = ''
        var newTill = ''
        for (let i =0; i < 12; i++) {
          newNow = newNow+now[i]
          newFrom = newFrom+from[i]
          newTill =newTill+till[i]
          
        }
        if(Number(newFrom) < Number(newNow) && Number(newNow) < Number(newTill)) {
          console.log (self.messages[j].message + 'should be shown')
        }else if(Number(newFrom) < Number(newNow) && Number(newNow) > Number(newTill)) {
          console.log (self.messages[j].message + 'has expired')
        }else if(Number(newFrom) >= Number(newNow) && Number(newNow) < Number(newTill)) {
          console.log (self.messages[j].message + 'shouldnt be shown yet')
        }
        
      }
      
      var myWindow = window.open(arrayOfUrls[x]) // default = 0
      if(x === arrayOfUrls.length ) {
        myWindow.close()
        self.checkTime() 
      } else if (x++ <= arrayOfUrls.length) {
        setTimeout(() => {
          myWindow.close()
          go()
        // change this number to change the time it switches between websites
        }, 53000); // 53 sec for each website this means it checks time every 15.01 min
      } 
    }

      go()
      
  }
  /**
   * on load
   */
  ngOnInit() {
    this.getNews()
    this.getData()
    this.checkTime()
    this.getMessages()
  }
  
}
