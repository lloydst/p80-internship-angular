import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';

/**
 * channel component
 */
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})

export class ChannelsComponent implements OnInit {
  /**
   * for template binding
   */
  channel
  /**
   * constructor
   * @param router router gets imported to display content based on the url
   */
  constructor (
    public router: Router,
    private data: DataService
  ) {}
  /**
   * on load
   */
  getRoutes() {
    this.data.getChannelContent().subscribe(doc=> {
      this.channel = doc
    })
  }
  ngOnInit () {
    this.getRoutes()
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/channels', {skipLocationChange: true}).then(()=>
    this.router.navigate(['channels',uri]));}
}
  

