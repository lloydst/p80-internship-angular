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
    component: AdminComponent, 
    children: [
      {
        path:'', 
        component: DashboardComponent
      },
      {
        path:'algemeen', 
        component: SettingComponent
      },
      {
        path:'channels', 
        component: AdminChannelsComponent,
        children: [
          {path: 'entrance', component: AdminEntranceComponent},
          {path: 'entrance/:id', component: AdminEntranceDetailComponent},
          {path: 'events', component: AdminEventComponent},
          {path: 'events/:id', component: AdminEventDetailComponent},
          {path: 'meeting', component: AdminMeetingComponent}
        ]
      }
    ]
  },
  {path:'channels', component: ChannelsComponent, children: [
    {
      path: 'event', component: EventComponent
    },
    {
      path: 'meeting', component: MeetingComponent
    },
    {
      path: 'entrance', component: EntranceComponent
    }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
