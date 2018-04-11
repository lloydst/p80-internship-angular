import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../services/data.service';
import { Website } from '../../../models/website';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

/**
 * add or remove websites that are shown in the loop or navigate to the detail-page to edit a existing one
 */
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class AdminEntranceComponent implements OnInit {
  /**
   * for binding
   */
  data: any;
  /**
   * constructor
   */
  constructor(
    private dataService: DataService,
    private router: Router) { }
    /**
     * bindings jai!
     */
    websiteForm = new FormGroup({
      website: new FormControl(),
      url: new FormControl()
    });
  ngOnInit() {
    this.getData()
  }
  /**
   * gets all websites from the api
   */
  getData() {
    this.dataService.getAllWebsites().subscribe(
      res => {this.data = res})
  }
  /**
   * goes to the detail page
   * @param item string shaped identifier
   */
  detail(item) {
    this.router.navigate(['/item._id'])
  }
  /**
   * deletes the website also checks if the user is shure about deleting it
   * @param item string shaped identifier
   */
  delete( item ) {
    if (confirm("Are you sure you want to delete " + item.name + "?")) {
      this.dataService.deleteWebsite(item._id).subscribe(
        data => {
          // refresh the list
          this.getData();
          return true;
        },
        error => {
          console.error("Error deleting message!");
          return Observable.throw(error);
        }
      );
    }
  }
  /**
   * creates a new website document with the following contents
   * @param site name of a site/ client
   * @param url the url of the corresponding client/site
   * @param visable a boolean i should delete
   */
  create (site, url, visable) {
    this.dataService.createWebsite({
      name: site,
      url: url,
      visable: visable}).subscribe(
        data => {
          // refresh the list
          this.getData();
          return true;
        },
        error => {
          console.error("Error creating message!");
          return Observable.throw(error);
       }
    )
  }
}
