import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Channel } from '../../models/channel';
import { Router } from '@angular/router';

/**
 * can display every channel based on url
 */
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html'
})
export class ChannelComponent implements OnInit {
  /**
   * binding
   */
  do
  /**
   * binding
   */
  currentchannel:string  
  /**
   * constructor
   */
  constructor(
    private data: DataService,
    private router: Router
  ){
    window.onbeforeunload = function(e) {
      var myWindow = window.open('javascript:void window.focus()', 'channel');
      myWindow.close()
    return undefined
    };
  }
  /**
   * just a function
   */
    log(){
      var url = this.router.url.split('/')
      this.currentchannel = url[2]
      console.log(this.currentchannel)
    }
  /**
   * on load
   */
    ngOnInit() {
      this.log()
      this.getRoutes()
      setTimeout(() => {
        this.openWindow()
      }, 200);
      
    }
    /**
   * just a function
   */
    getRoutes() {
      this.data.getChannel(this.currentchannel).subscribe(res=> {
        this.do = res
      })
    }
   /**
   * just a function
   */
    openWindow() {
          var x = 0;
          var self = this // REQUIRED FOR CHECK TIME
          function go() {
            //console.log(self.do[0].path[x].pathurl)
            var myWindow = window.open(self.do[0].path[x].pathurl,"channel") // default = 0
            
            if(x == self.do[0].path.length ) {
              myWindow.close()
              console.log('done')
            } else if (x++ < self.do[0].path.length) { // if should go next path go next path
              setTimeout(() => {
                
                myWindow.close()
                go()
              }, self.do[0].path[x -1].delay);
              
              // because x gets incremented by 1 in the else if statement i have to subtract one to get the right delay
            }
            if(x == self.do[0].path.length){
              console.log('done')
              self.getRoutes()
              x=0
              return x
            }
          }
          go()
        }
        
  }
 