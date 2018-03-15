import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {
  today = new Date();
  hour = this.today.getHours(); // returns a number between 0 and 23 (23:59 still returns only 23)
  // hour = 1 // test variable 
  // this controls visablity 
  time;
  
  constructor() { }

  ngOnInit() {
    this.checktime()
  }
  
  checktime() {
    if(this.hour > 17) { // 16h = 4pm
      
      console.log('no 1 should be working')
      return this.time = 'past 6'
    } else if(this.hour > 15) {
      
      console.log(this.hour)
      console.log('display travel info')
      return this.time = true ;
    } else if(this.hour < 15) { 
      
      console.log('loop')
      return this.time = false;
    } 
  }
}
