import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'channels',
    pathMatch: 'full'
  }, // default
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'channels',
    loadChildren: 'app/channels/channels.module#ChannelsModule'
  },
  {
    path: 'components',
    loadChildren: 'app/components/components.module#ComponentsModule'
  },
  {
      path: '**', redirectTo: 'channels' // backup route
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }) // set to true for debugging
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
