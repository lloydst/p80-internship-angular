import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildServersComponent } from './build-servers/build-servers.component';
import { FinancialComponent } from './financial/financial.component';
import { SupportComponent } from './support/support.component';
import { ComponentsComponent } from './components.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WebsiteLoopComponent } from './website-loop/website-loop.component';
import { WeatherComponent } from './weather/weather.component';
import { EventComponent } from './event/event.component';
import { AllComponent } from './all/all.component';
import { CustomComponent } from './custom/custom.component';
import { TrafficComponent } from './traffic/traffic.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'components', component: ComponentsComponent, children: [
    {
      path: 'meeting', component: MeetingComponent
    },
    {
      path: 'loop', component: WebsiteLoopComponent
    },
    {
      path: 'weather', component: WeatherComponent
    },
    {
      path: 'build-servers', component: BuildServersComponent
    },
    {
      path: 'event', component: EventComponent
    },
    {
      path: 'financial', component: FinancialComponent
    },
    {
      path: 'support/:id', component: SupportComponent
    },
    {
      path: 'all', component: AllComponent
    },
    {
      path: 'custom/:componentList', component: CustomComponent
    },
    {
      path: 'traffic', component: TrafficComponent
    },
    {
      path: 'news', component: NewsComponent
    },
    {
      path: 'servers', component: BuildServersComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
