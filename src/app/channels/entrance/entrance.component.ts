import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Channel } from '../../models/channel.interface';

/**
 * entrance component
 */
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
 
})

export class EntranceComponent implements OnInit  {
  do  
/**
 * constructor
 */
constructor(private data: DataService){}
  
/**
 * on load
 */
  ngOnInit() {
    this.getRoutes()
    setTimeout(() => {
      this.openWindow()
    }, 200);
    
  }
  getRoutes() {
    this.data.getChannel('entrance').subscribe(res=> {
      this.do = res
    })
  }
  whatToDo() {
    console.log(this.do[0].path.length)
    for (let i = 0; i < this.do[0].path.length; i++) {
      // works needs slowing down and take this.do[0].path[i].delay in account // delay doesn't exist yet!
      var myWindow = window.open(this.do[0].path[i].pathurl)
      setTimeout(() => {
        myWindow.close()
      }, 2000);
    }
    /* when done rerun
    this.getRoutes()
    setTimeout(() => {
      this.whatToDo()
    }, 200);
    // or turn it to a stream
  */
  }
  openWindow() {
        var x = 0;
        var self = this // REQUIRED FOR CHECK TIME
        function go() {
          console.log(self.do[0].path[x].pathurl)
          var myWindow = window.open(self.do[0].path[x].pathurl) // default = 0
          if(x === self.do[0].path.length ) {
            myWindow.close()
          } else if (x++ <= self.do[0].path.length) {
            setTimeout(() => {
              myWindow.close()
              go()
            // change this number to change the time it switches between websites
            }, 10000); // 53 sec for each website this means it checks time every 15.01 min
          } 
        }
        go()
      }
}
