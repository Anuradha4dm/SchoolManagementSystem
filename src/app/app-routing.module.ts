import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './component/notification/notification.component';
import { AddSubjectsComponent } from './component/student/add-subjects/add-subjects.component';
import { StudentAttendenceComponent } from './component/student/student-attendence/student-attendence.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';

import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { NotificationResolver } from './services/Notification-resolver.service';

const routes: Routes = [
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
  { path: 'addsubjects', component: AddSubjectsComponent },
  {
    path: 'notification',
    component: NotificationComponent,
    resolve: { notifications: NotificationResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
