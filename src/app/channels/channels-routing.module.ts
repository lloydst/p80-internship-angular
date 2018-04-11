import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent } from './channels.component';
import { EventComponent } from './event/event.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EntranceComponent } from './entrance/entrance.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
