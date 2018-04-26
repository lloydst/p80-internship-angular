import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent } from './channels.component';
import { EventComponent } from './event/event.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EntranceComponent } from './entrance/entrance.component';
import { WeatherComponent } from './weather/weather.component';
import { BuildServersComponent } from './build-servers/build-servers.component';
import { FinancialComponent } from './financial/financial.component';
import { SupportComponent } from './support/support.component';

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
    },
    {
      path:'entrance/weather', component: WeatherComponent
    },
    {
      path: 'build', component: BuildServersComponent
    },
    {
      path: 'financial', component:FinancialComponent
    },
    {
      path: 'support', component: SupportComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
