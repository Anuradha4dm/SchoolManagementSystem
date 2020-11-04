import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { NotificationResolver } from 'src/app/services/Notification-resolver.service';
import { AddNewProfileComponent } from '../admin/add-new-profile/add-new-profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificationComponent } from '../notification/notification.component';
import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddSubjectResolverService } from './student-resolvers/add-subject-resolver.service';
import { GetRegisteredSubjectList } from './student-share-components/get-subject-resolver.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';

export const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModel {}
