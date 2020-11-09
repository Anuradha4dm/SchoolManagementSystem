import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { LayoutComponent } from './layout/layout.component';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';
import { SendEmilComponent } from './component/send-emil/send-emil.component';
import { TeacherProfileComponent } from './component/teacher/teacher-profile/teacher-profile.component';
import { LeavehandleComponent } from './component/nonacademic/leavehandle/leavehandle.component';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
  },
  // {
  //   path: 'user',
  //   component: LayoutComponent,
  //   children: [
  //     { path: 'leave-request', component: LeaverequestComponent },
  //     { path: 'send-email', component: SendEmilComponent },
  //   ],
  // },
  // {
  //   path: 'user',
  //   component: LayoutComponent,
  //   children: [
  //     { path: 'leave-request', component: LeaverequestComponent },
  //     //to remove
  //     { path: 'userprofile', component: TeacherProfileComponent },
  //     { path: 'leavehandle', component: LeavehandleComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
