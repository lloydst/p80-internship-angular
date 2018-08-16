import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels.component';

const routes: Routes = [
    {
        path: 'channels', component: ChannelsComponent, children: [
            {
                path: ':channel', component: ChannelComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChannelsRoutingModule { }
