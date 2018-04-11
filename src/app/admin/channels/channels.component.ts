import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * channel component: and doubles as top nav
 */
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class AdminChannelsComponent implements OnInit {
/**
 * constructor
 * @param router makes router available to ngIf
 */
  constructor(router: ActivatedRoute) { }
  /**
   * runs on load
   */
  ngOnInit() {
    
  }
 
}
