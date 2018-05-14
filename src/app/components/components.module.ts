import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { WebsiteLoopComponent } from './website-loop/website-loop.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EventComponent } from './event/event.component';
import { SupportComponent } from './support/support.component';
import { FinancialComponent } from './financial/financial.component';
import { BuildServersComponent } from './build-servers/build-servers.component';
import { WeatherComponent } from './weather/weather.component';
import { AllComponent } from './all/all.component';
import { CustomComponent } from './custom/custom.component';
import { NewsComponent } from './news/news.component';
import { TrafficComponent } from './traffic/traffic.component';
import { NguiMapModule } from '@ngui/map';
@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NguiMapModule.forRoot(
      {apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDB68aJIk7wVjjPvGa7nON_ngvlnRmoG98'}
    )
  ],
  declarations: [
    ComponentsComponent,
    WebsiteLoopComponent,
    MeetingComponent,
    EventComponent,
    SupportComponent,
    FinancialComponent,
    BuildServersComponent,
    WeatherComponent,
    AllComponent,
    CustomComponent,
    NewsComponent,
    TrafficComponent
  ]
})
export class ComponentsModule { }
