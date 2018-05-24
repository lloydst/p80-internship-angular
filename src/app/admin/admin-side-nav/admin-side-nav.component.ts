import { Component, OnInit } from '@angular/core';

/**
 * side nav component
 */
@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss']
})
export class AdminSideNavComponent implements OnInit {
/**
 * constructor
 */
  constructor() { }
/**
 * on load
 */
  ngOnInit() {
  }
  toggleMenu() {
    /**
     * functions
     */
    // detect screen size!
    // detect menu.prop hidden: hidden or hidden: visable
    /**
     * logic
     */
    // check screen size (smaller then 1200 = true & menu visable)
    // show the close then on click close it
    /**
     * logic
     */
    // check screen size (smaller then 1200 = true & menu hidden)
    // show the open then on click open it
  }
}
