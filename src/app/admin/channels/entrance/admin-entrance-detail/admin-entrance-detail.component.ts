import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Website } from '../../../../models/website';
@Component({
  selector: 'app-admin-entrance-detail',
  templateUrl: './admin-entrance-detail.component.html',
  styleUrls: ['./admin-entrance-detail.component.scss']
})
export class AdminEntranceDetailComponent implements OnInit {
data: any
id
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
    this.getData()
  }
  getData() {
    this.dataService.getWebsite(this.id).subscribe(
      res => {this.data = res}
    )
  }
  update(name, url) {
    this.dataService.updateWebsite(this.id, {name: name, url: url}).subscribe()
    console.log(this.id)
  }
}
