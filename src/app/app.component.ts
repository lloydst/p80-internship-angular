import { Component, OnInit } from '@angular/core';
import { ToasterService, IToasterConfig, ToasterConfig } from 'angular2-toaster';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: 'app'
  // private toasterService: ToasterService;
 
    // constructor(toasterService: ToasterService) {
        // this.toasterService = toasterService;
    // }
 
    // popToast() {
        // this.toasterService.pop('success', 'Args Title', 'Args Body');
    // }
}
