import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChannelsComponent } from './channels/channels.component';
import { SettingComponent } from './admin/setting/setting.component';
import { EventComponent } from './channels/event/event.component';
import { EntranceComponent } from './channels/entrance/entrance.component';
import { MeetingComponent } from './channels/meeting/meeting.component';

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
        path:'algemeen', 
        component: SettingComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
