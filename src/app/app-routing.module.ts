import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChannelsComponent } from './channels/channels.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent, children: [
    {path:'algemeen', component: SettingComponent}
  ]},
  {path:'channels', component: ChannelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
