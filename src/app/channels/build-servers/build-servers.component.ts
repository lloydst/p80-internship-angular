import { Component, OnInit } from '@angular/core';

/**
 * build server component: shows status of the build servers
 *  - error: and the error it self
 *  - done
 *  - building: + progress
 */
@Component({
  selector: 'app-build-servers',
  templateUrl: './build-servers.component.html',
  styleUrls: ['./build-servers.component.scss']
})
/**
 * component
 */
export class BuildServersComponent implements OnInit {

  /**
   * not used
   */
  constructor() { }
/**
 * not used
 */
  ngOnInit() {
  }

}
