import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';
import { Title } from '@angular/platform-browser';
/**
 * channel component
 */
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html'
})

export class ChannelsComponent implements OnInit {
  title = "control"
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
    private data: DataService,
    private titleService: Title 
  ) {}
  /**
   * gets the channels from db
   */
  getRoutes() {
    this.data.getChannelContent().subscribe(doc=> {
      this.channel = doc
    })
  }
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  /**
   * on load
   */
  ngOnInit () {
    this.setTitle("Channel control")
    this.getRoutes()
  }
  ngOnDestroy() {
    this.setTitle("p80 interschip assignment")
  }
  /**
   * force child reload
   * @param uri will navigate too /channels/uri
   */
  redirectTo(uri:string){
    this.router.navigateByUrl('/channels', {skipLocationChange: true}).then(()=>
    this.router.navigate(['channels',uri]));
  }
  /**
   * force child reload
   * @param uri will navigate too /admin/contents/uri
   */
  goToNewChannel(uri:string){
    this.router.navigateByUrl('/channels', {skipLocationChange: true}).then(()=>
    this.router.navigate(['admin','contents',uri]));
  }
  stop() {
    this.router.navigateByUrl('');
  }
}

  

