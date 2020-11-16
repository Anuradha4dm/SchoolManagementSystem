import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { NotificationResolver } from 'src/app/services/Notification-resolver.service';
import { AddNewProfileComponent } from '../admin/add-new-profile/add-new-profile.component';

import { NotificationComponent } from '../notification/notification.component';

import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ParticipationComponent } from './participation/participation.component';
import { SportsHandleComponent } from './sports-handle/sports-handle.component';
import { AddSubjectResolverService } from './student-resolvers/add-subject-resolver.service';
import { GetRegisteredSubjectList } from './student-share-components/get-subject-resolver.service';
import { StudentRouteGuard } from './student-share-components/student-router.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';

export const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [StudentRouteGuard],
    children: [
      { path: 'userprofile', component: UserProfileComponent },

      {
        path: 'addsubjects',
        component: AddSubjectsComponent,
        resolve: { data: AddSubjectResolverService },
      },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'edit-profile/:id', component: EditProfileComponent },
      { path: 'add-new-profile', component: AddNewProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view-participation', component: ParticipationComponent },
      { path: 'view-result', component: ViewResultComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      {
        path: 'viewsubjects',
        component: ViewSubjectsComponent,
        resolve: { subjectList: GetRegisteredSubjectList },
      },
      {
        path: 'notification',
        component: NotificationComponent,
        resolve: { notifications: NotificationResolver },
      },
      {
        path: 'sports',
        component: SportsHandleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModel {}
