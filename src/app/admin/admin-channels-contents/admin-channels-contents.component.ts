import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

/**
 * admin channels content component
 */
@Component({
  selector: 'app-admin-channels-contents',
  templateUrl: './admin-channels-contents.component.html',
  styleUrls: ['./admin-channels-contents.component.scss']
})
export class AdminChannelsContentsComponent implements OnInit {
  channel
  /**
   * constructor
   */
  constructor(private data: DataService) { }
  /**
   * on load
   */
  ngOnInit() {
    
  }

}
