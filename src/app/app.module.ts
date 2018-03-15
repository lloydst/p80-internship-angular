import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';
import { EventComponent } from './channels/event/event.component';
import { AdminComponent } from './admin/admin.component';
import { SettingComponent } from './admin/setting/setting.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
