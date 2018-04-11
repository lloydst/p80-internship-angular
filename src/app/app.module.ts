/**
 * angular module's and routing
 */

import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NguiMapModule} from '@ngui/map';
import { FormsModule } from '@angular/forms';
// import { ToasterModule, ToasterService} from 'angular2-toaster';

/**
 * components
 */
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ChannelsModule } from './channels/channels.module';


/**
 * services
 */
import { SocketService } from './services/socket.service';
import { DataService } from './services/data.service';
/**
 * models
 */
import { Website } from './models/website';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ChannelsModule,
    AppRoutingModule,    
    ],
  providers: [
    DataService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
