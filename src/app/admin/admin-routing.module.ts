import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin.component';

import { AdminChannelsComponent } from './componenten/channels.component';
import { AdminEntranceComponent } from './componenten/entrance/entrance.component';
import { AdminEntranceDetailComponent } from './componenten/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventComponent } from './componenten/event/event.component';
import { AdminEventDetailComponent } from './componenten/event/admin-event-detail/admin-event-detail.component';
import { AdminMeetingComponent } from './componenten/meeting/meeting.component';
import { ImageUploadComponent } from './image/image-upload/image-upload.component';
import { ImageViewComponent } from './image/image-view/image-view.component';
import { AdminChannelsContentsComponent } from './channels/admin-channels-contents/admin-channels-contents.component';
import { ChannelNewComponent } from './channels/channel-new/channel-new.component';
import { ChannelContentComponent } from './channels/channel-content/channel-content.component';

/**
 * defining routes
 */
const routes = [
  { path: 'admin', component: AdminComponent, children:[
    {
      path:'', 
      component: DashboardComponent // this one's grid had to be done seperate
    },
    {
      path:'algemeen', 
      component: SettingComponent
    },
    {
      path:'components', 
      component: AdminChannelsComponent,
      children: [
        {path: 'entrance', component: AdminEntranceComponent},
        {path: 'entrance/:id', component: AdminEntranceDetailComponent},
        {path: 'events', component: AdminEventComponent},
        {path: 'events/:id', component: AdminEventDetailComponent},
        {path: 'meeting', component: AdminMeetingComponent}
      ]
    },
    {
      path:'channels', component: AdminChannelsContentsComponent, children: [
        // these need to become content specific
        {
          path: '',
          redirectTo:'new',
          pathMatch: 'full'
        }, // default
        {path: 'new', component: ChannelNewComponent},
        {path: ':channel', component: ChannelContentComponent}
        
      ]
    },
    {
      path: 'upload',
      component: ImageUploadComponent
    },
    {
      path: 'image',
      component: ImageViewComponent
    }
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
