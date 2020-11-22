import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { PasswordResetComponent } from './component/homepage/password-reset/password-reset.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SendEmilComponent } from './component/send-emil/send-emil.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [{ path: 'send-email', component: SendEmilComponent }],
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  },
  {
    path: 'new',
    component: PasswordResetComponent
  }

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
