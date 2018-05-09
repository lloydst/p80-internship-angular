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

import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { FileService } from './services/file.service';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from './components/components.module';


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
    ComponentsModule,
    AppRoutingModule,
    FileUploadModule,
       
    ],
  providers: [
    DataService,
    SocketService,
    NewsService,
    WeatherService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
