import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';
import { EventComponent } from './channels/event/event.component';
import { AdminComponent } from './admin/admin.component';
import { SettingComponent } from './admin/setting/setting.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { DataService } from './services/data.service';
import { Website } from './models/website';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    EntranceComponent,
    MeetingComponent,
    EventComponent,
    AdminComponent,
    SettingComponent,
    AdminSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiMapModule.forRoot(
      {apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDB68aJIk7wVjjPvGa7nON_ngvlnRmoG98'}
    )
    ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
