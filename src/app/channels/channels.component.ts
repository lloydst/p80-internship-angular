import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
   * constructor
   * @param router router gets imported to display content based on the url
   */
  constructor (public router: Router) {}
  /**
   * on load
   */
  ngOnInit () {

  }
}
  

