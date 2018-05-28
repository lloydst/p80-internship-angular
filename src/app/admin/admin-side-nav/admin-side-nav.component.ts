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
    var x = document.getElementById("Nav");
      if (x.className === "nav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  
  }
}
