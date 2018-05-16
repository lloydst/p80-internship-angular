import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { AdminChannelsComponent } from './channels/channels.component';
import { AdminComponent } from './admin.component';
import { AdminEntranceComponent } from './channels/entrance/entrance.component';
import { AdminEntranceDetailComponent } from './channels/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventComponent } from './channels/event/event.component';
import { AdminEventDetailComponent } from './channels/event/admin-event-detail/admin-event-detail.component';
import { AdminMeetingComponent } from './channels/meeting/meeting.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { AdminChannelsContentsComponent } from './admin-channels-contents/admin-channels-contents.component';
import { SupportContentsComponent } from './support-contents/support-contents.component';
import { ChannelNewComponent } from './channel-new/channel-new.component';
import { ChannelContentComponent } from './channel-content/channel-content.component';

/**
 * defining routes
 */
const routes = [
  { path: 'admin', component: AdminComponent, children:[
    {
      path:'', 
      component: DashboardComponent
    },
    {
      path:'algemeen', 
      component: SettingComponent
    },
    {
      path:'channels', 
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
      path:'contents', 
      component: AdminChannelsContentsComponent,
      children: [
        // these need to become content specific
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
