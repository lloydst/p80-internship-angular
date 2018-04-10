import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminChannelsComponent } from './channels/channels.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin.component';
import { AdminEntranceComponent } from './channels/entrance/entrance.component';
import { AdminEntranceDetailComponent } from './channels/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventComponent } from './channels/event/event.component';
import { AdminEventDetailComponent } from './channels/event/admin-event-detail/admin-event-detail.component';
import { AdminMeetingComponent } from './channels/meeting/meeting.component';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminSideNavComponent,
    AdminChannelsComponent,
    DashboardComponent,
    SettingComponent,
    AdminComponent,
    AdminEntranceComponent,
    AdminEntranceDetailComponent,
    AdminEventComponent,
    AdminEventDetailComponent,
    AdminMeetingComponent
  ]
})
export class AdminModule { }
