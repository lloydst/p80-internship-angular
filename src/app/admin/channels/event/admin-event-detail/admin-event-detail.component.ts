import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Message } from '../../../../models/message';
@Component({
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss']
})
export class AdminEventDetailComponent implements OnInit {
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
    this.dataService.getMessage(this.id).subscribe(
      res => {this.data = res}
    )
  }
  update(message, showFrom, showTill) {
    this.dataService.updateMessage(this.id, {message: message, showFrom: showFrom, showTill: showTill}).subscribe()
    
  }
  alertUser () {
    const redirect = window.confirm('updated do you wish to return?')
    if (redirect) {
      this.router.navigate(['./admin/channels/events'])
    }
  }
}
