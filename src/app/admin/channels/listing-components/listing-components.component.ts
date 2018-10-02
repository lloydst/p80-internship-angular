import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Website } from '../../../models/website';
/**
 * lists components
 */
@Component({
  selector: 'app-listing-components',
  templateUrl: './listing-components.component.html'
})
export class ListingComponentsComponent implements OnInit {
    /**
     * used to calc loop time
     */
    websiteArray:Website[];
    /**
     * total time needed for the loop component
     */
    websiteTime=0
/**
 * constructor
 */
  constructor(private data: DataService) { }
/**
 * on load
 */
  ngOnInit() {
    /*  this.data.getAllWebsites().subscribe((res: any) => {
          this.websiteArray = res
          for (let w = 0; w < this.websiteArray.length; w++) {
              this.websiteTime = this.websiteTime + this.websiteArray[w].displayTime;

          }
         }) */
  }

}
