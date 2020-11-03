import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './component/notification/notification.component';
import { AddSubjectsComponent } from './component/student/add-subjects/add-subjects.component';
import { StudentAttendenceComponent } from './component/teacher/student-attendence/student-attendence.component';
import { StudentListComponent } from './component/teacher/student-list/student-list.component';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';

import { UserProfileComponent } from './component/student/user-profile/user-profile.component';
import { NotificationResolver } from './services/Notification-resolver.service';
import { AddNewProfileComponent } from './component/admin/add-new-profile/add-new-profile.component';
import { EditProfileComponent } from './component/student/edit-profile/edit-profile.component';
import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ViewResultComponent } from './component/student/view-result/view-result.component';
import { ViewSubjectsComponent } from './component/student/view-subjects/view-subjects.component';
import { AddSubjectResolverService } from './component/student/student-resolvers/add-subject-resolver.service';
import { GetRegisteredSubjectList } from './component/student/student-share-components/get-subject-resolver.service';
const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      { path: 'userprofile', component: UserProfileComponent },
      {
        path: 'student-list',
        component: StudentListComponent,
        resolve: { studentList: GetClassStudentListResolver },
      },
      {
        path: 'mark-attendence',
        component: StudentAttendenceComponent,
        resolve: { studentList: GetStudentListForAttendenceResolver },
      },
      {
        path: 'addsubjects',
        component: AddSubjectsComponent,
        resolve: { data: AddSubjectResolverService },
      },
      {
        path: 'notification',
        component: NotificationComponent,
        resolve: { notifications: NotificationResolver },
      },
      { path: 'edit-profile', component: AddNewProfileComponent },
      { path: 'edit-profile/:id', component: EditProfileComponent },
      { path: 'add-new-profile', component: AddNewProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view-result', component: ViewResultComponent },
      {
        path: 'viewsubjects',
        component: ViewSubjectsComponent,
        resolve: { subjectList: GetRegisteredSubjectList },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
