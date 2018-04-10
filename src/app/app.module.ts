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
import { ChannelsComponent } from './channels/channels.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';
import { EventComponent } from './channels/event/event.component';
import { SupportComponent } from './channels/support/support.component';
import { FinancialComponent } from './channels/financial/financial.component';
import { BuildServersComponent } from './channels/build-servers/build-servers.component';

/**
 * services
 */
import { SocketService } from './services/socket.service';
import { DataService } from './services/data.service';
/**
 * models
 */
import { Website } from './models/website';
import { ChatComponent } from './chat/chat.component';
import { SupportTicketsComponent } from './admin/channels/support-tickets/support-tickets.component';




@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    EntranceComponent,
    MeetingComponent,
    EventComponent,
    SupportComponent,
    FinancialComponent,
    BuildServersComponent,
    ChatComponent,
    SupportTicketsComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    AdminModule,
    NguiMapModule.forRoot(
      {apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDB68aJIk7wVjjPvGa7nON_ngvlnRmoG98'}
    ),
    AppRoutingModule,    
    ],
  providers: [
    DataService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
