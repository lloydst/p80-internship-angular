import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Message } from '../../../../models/message';
import * as $ from 'jquery';
/**
 * message/event detail page
 */
@Component({
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss']
})
export class AdminEventDetailComponent implements OnInit {
  /**
   * for binding
   */
data: any
/**
 * for binding
 */
id
/**
 * component constructor
 * @param router for navigation
 * @param route for param.id
 * @param dataService crud events
 */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }
/**
 * on load
 */
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
    this.getData()
  }
  /**
   * gets a single message
   */
  getData() {
    this.dataService.getMessage(this.id).subscribe(
      res => {this.data = res}
    )
  }
  /**
   * sees if checkbox is checked
   * @param  $event
   */
  check($event){
    $('#imgBoolean').change(function(){ alert($('#imgBoolean').attr('checked'));})
  }
  /**
   * updates a message
   * @param message message text to replace the old text with
   * @param showFrom show from time/date
   * @param showTill untill
   * @param imgLink url img can be found at
   * @param img boolean for visability of img
   * @param id id to update by
   */
  update(message, showFrom, showTill, imgLink, img, id) {
    this.dataService.updateMessage(this.id, {message: message, showFrom: showFrom, showTill: showTill, imgLink:imgLink, img:img, identifier: id}).subscribe()
    
  }
  /**
   * prevents a user from acidently removeing a message
   */
  alertUser () {
    const redirect = window.confirm('updated do you wish to return?')
    if (redirect) {
      this.router.navigate(['./admin/channels/events'])
    }
  }
}
