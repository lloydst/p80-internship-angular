import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { AdminChannelsComponent } from './componenten/channels.component';
import { AdminEntranceComponent } from './componenten/entrance/entrance.component';
import { AdminEntranceDetailComponent } from './componenten/entrance/admin-entrance-detail/admin-entrance-detail.component';
import { AdminEventComponent } from './componenten/event/event.component';
import { AdminEventDetailComponent } from './componenten/event/admin-event-detail/admin-event-detail.component';
import { ImageUploadComponent } from './image/image-upload/image-upload.component';
import { ImageViewComponent } from './image/image-view/image-view.component';
import { AdminChannelsContentsComponent } from './channels/admin-channels-contents/admin-channels-contents.component';
import { ChannelContentComponent } from './channels/channel-content/channel-content.component';
import { ChannelNewComponent } from './channels/channel-new/channel-new.component';
import { ListingComponentsComponent } from './channels/listing-components/listing-components.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FileUploadModule,
  ],
  declarations: [
    AdminSideNavComponent,
    AdminChannelsComponent,
    DashboardComponent,
    AdminComponent,
    AdminEntranceComponent,
    AdminEntranceDetailComponent,
    AdminEventComponent,
    AdminEventDetailComponent,
    ImageUploadComponent,
    ImageViewComponent,
    AdminChannelsContentsComponent,
    ChannelContentComponent,
    ChannelNewComponent,
    ListingComponentsComponent,
  ]
})
export class AdminModule { }
