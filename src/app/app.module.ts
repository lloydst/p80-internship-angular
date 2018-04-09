/**
 * angular module's and routing
 */

import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NguiMapModule} from '@ngui/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToasterModule, ToasterService} from 'angular2-toaster';

/**
 * components
 */
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';
import { EventComponent } from './channels/event/event.component';
import { AdminComponent } from './admin/admin.component';
import { AdminChannelsComponent } from './admin/channels/channels.component';
import { SettingComponent } from './admin/setting/setting.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { AdminEntranceComponent } from './admin/channels/entrance/entrance.component';
import { AdminEventComponent } from './admin/channels/event/event.component';
import { AdminMeetingComponent } from './admin/channels/meeting/meeting.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
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
import { AdminEntranceDetailComponent } from './admin/channels/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventDetailComponent } from './admin/channels/event/admin-event-detail/admin-event-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    EntranceComponent,
    MeetingComponent,
    EventComponent,
    AdminComponent,
    SettingComponent,
    AdminChannelsComponent,
    AdminSideNavComponent,
    DashboardComponent,
    AdminEntranceComponent,
    AdminEventComponent,
    AdminMeetingComponent,
    SupportComponent,
    FinancialComponent,
    BuildServersComponent,
    ChatComponent,
    AdminEntranceDetailComponent,
    AdminEventDetailComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ToasterModule.forRoot(),
    NguiMapModule.forRoot(
      {apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDB68aJIk7wVjjPvGa7nON_ngvlnRmoG98'}
    )
    ],
  providers: [
    DataService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
