import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { LayoutComponent } from './layout/layout.component';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
  },
  {
    path: 'user',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
