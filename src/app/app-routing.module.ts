import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChannelsComponent } from './channels/channels.component';
import { SettingComponent } from './admin/setting/setting.component';
import { EventComponent } from './channels/event/event.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';
import { AdminChannelsComponent } from './admin/channels/channels.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminEntranceComponent } from './admin/channels/entrance/entrance.component';
import { AdminEventComponent } from './admin/channels/event/event.component';
import { AdminMeetingComponent } from './admin/channels/meeting/meeting.component';
import { AdminEntranceDetailComponent } from './admin/channels/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventDetailComponent } from './admin/channels/event/admin-event-detail/admin-event-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'channels',
    pathMatch: 'full'
  }, // default
  {
    path:'admin', 
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {path:'channels', loadChildren: 'app/channels/channels.module#ChannelsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: false }) // set to true for debugging
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
