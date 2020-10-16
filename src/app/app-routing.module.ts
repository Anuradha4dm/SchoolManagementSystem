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
  { path: 'edit-profile', component: AddNewProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
