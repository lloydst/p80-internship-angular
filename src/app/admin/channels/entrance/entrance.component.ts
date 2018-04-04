import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../services/data.service';
import { Website } from '../../../models/website';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class AdminEntranceComponent implements OnInit {
  data: any;
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.dataService.getAllWebsites().subscribe(
      res => {this.data = res})
  }
  detail(item) {
    this.router.navigate(['/item._id'])
  }
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
