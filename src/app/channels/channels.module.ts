import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';
import { NguiMapModule } from '@ngui/map';
import { FormsModule } from '@angular/forms';
import { ChannelComponent } from './channel/channel.component';

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
    ChannelComponent
  ]
})
export class ChannelsModule { }
