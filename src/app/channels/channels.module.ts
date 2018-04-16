import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';
import { EntranceComponent } from './entrance/entrance.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EventComponent } from './event/event.component';
import { SupportComponent } from './support/support.component';
import { FinancialComponent } from './financial/financial.component';
import { BuildServersComponent } from './build-servers/build-servers.component';
import { NguiMapModule } from '@ngui/map';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    NguiMapModule.forRoot(
      {apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDB68aJIk7wVjjPvGa7nON_ngvlnRmoG98'}
    )
  ],
  declarations: [
    ChannelsComponent,
    EntranceComponent,
    MeetingComponent,
    EventComponent,
    SupportComponent,
    FinancialComponent,
    BuildServersComponent,
    WeatherComponent
  ]
})
export class ChannelsModule { }
