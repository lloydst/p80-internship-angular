import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class AdminChannelsComponent implements OnInit {

  constructor(router: ActivatedRoute) { }
  /**
   * @description parent for each channel so they all have the same "blanc layout"
   */
  ngOnInit() {
    
  }
 
}
