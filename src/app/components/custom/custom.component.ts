import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  servers: boolean = false
  event: boolean = false
  financial: boolean = false
  meeting: boolean = false
  support: boolean = false
  weather: boolean = false
  loop: boolean = false
  constructor(private route: Router) { }

  ngOnInit( ) {
    this.visability()
  }
  visability() {
    let urlArray 
    urlArray = this.route.url
    // first cut off components/custom
    urlArray = urlArray.toString().split("/")
    // then create array .split("-")
    urlArray = urlArray[3].split("-")
    for(let i = 0; i<urlArray.length; i++){
      const urlArrayItem = urlArray[i].toString()
      console.log(urlArrayItem)
      switch(urlArrayItem) { 
        case 'meeting': { 
          this.meeting = true
           break; 
        } 
        case 'financial': { 
           this.financial = true
           break; 
        } 
        case 'servers': { 
          this.servers = true
          break; 
        } 
        case 'event': { 
          this.event = true
          break; 
        }
        case 'support': { 
          this.support = true
          break; 
        }
        case 'weather': { 
          this.weather = true
          break; 
        } 
        case 'loop': { 
          this.loop = true
          break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
     } 
      /*if(urlArray[i]){
        this.meeting = true
      } */
    }
  }
}
