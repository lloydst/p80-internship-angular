import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent } from './channels.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EntranceComponent } from './entrance/entrance.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {path:'channels', component: ChannelsComponent, children: [
    
    {
      path: 'meeting', component: MeetingComponent
    },
    {
      path: 'entrance', component: EntranceComponent
    },
    {
      path: 'other', component: OtherComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
