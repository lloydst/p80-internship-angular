import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

/**
 * admin channels content component
 */
@Component({
  selector: 'app-admin-channels-contents',
  templateUrl: './admin-channels-contents.component.html',
  styleUrls: ['./admin-channels-contents.component.scss']
})
export class AdminChannelsContentsComponent implements OnInit {
  /**
   * for binding
   */
  channel
  /**
   * for binding
   */
  currentChannel
  /**
   * constructor
   */
  constructor(
    private data: DataService,
    private router: Router
  ) { }
  getCurrentChannel(){
    var url =this.router.url.split("/")
    this.currentChannel = url[3]
  }
  /**
   * on load
   */
  ngOnInit() {
    this.getCurrentChannel()
    this.getChannels()
  }
  getChannels(){
    this.data.getChannelContent().subscribe(data=>{
      this.channel = data
    })
  }
  /**
   * forces reload of child component(wouldnt do that with routerlink)
   * @param uri channel to navigate to to edit or create
   */
  redirectTo(uri:string){
    this.router.navigateByUrl('/admin', {skipLocationChange: true}).then(()=>
    this.router.navigate(['admin/contents',uri]));
  }
  delete(obj) {
    this.data.deleteChannel(obj).subscribe(()=>{
      this.getChannels()
      this.redirectTo('')
    })
  }
}
