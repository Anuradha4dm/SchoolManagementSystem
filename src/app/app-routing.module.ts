import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { PasswordResetComponent } from './component/homepage/password-reset/password-reset.component';
import { MarkAttendenceTeacherComponent } from './component/mark-attendence-teacher/mark-attendence-teacher.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SendEmilComponent } from './component/send-emil/send-emil.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'teacher-attendence',
    component: MarkAttendenceTeacherComponent,
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [{ path: 'send-email', component: SendEmilComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
