import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * displays one or more components based on properties
 */
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  /**
   * displays the servers components based on url
   */
  servers: boolean = false
  /**
   * displays the servers components based on url
   */
  event: boolean = false
  /**
   * displays the servers components based on url
   */
  financial: boolean = false
  /**
   * displays the servers components based on url
   */
  meeting: boolean = false
  /**
   * displays the servers components based on url
   */
  support: boolean = false
  /**
   * displays the servers components based on url
   */
  weather: boolean = false
  /**
   * displays the servers components based on url
   */
  loop: boolean = false
  /**
   * displays the servers components based on url
   */
  news: boolean = false
  /**
   * displays the servers components based on url
   */
  traffic: boolean = false
  /**
   * loads the angular router
   * @param route checks the route
   * @returns host/x
   */
  constructor(private route: Router) { }
  /**
   * on load
   */
  ngOnInit( ) {
    this.visability()
  }
  /**
   * sets a component to true if the urlArrayItem matches a string
   */
  visability() {
    let urlArray 
    urlArray = this.route.url
    // first cut off components/custom
    urlArray = urlArray.toString().split("/")
    // then create array .split("-")
    urlArray = urlArray[3].split("-")
    for(let i = 0; i<urlArray.length; i++){
      const urlArrayItem = urlArray[i].toString()
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
        case 'news': { 
          this.news = true
          break; 
        }
        case 'traffic': { 
          this.traffic = true
          break; 
        }
        default: { 
           //statements; 
           break; 
        } 
      } 
    }
  }
}
