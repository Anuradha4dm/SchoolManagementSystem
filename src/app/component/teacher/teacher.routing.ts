import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { NotificationResolver } from 'src/app/services/Notification-resolver.service';
import { LeaverequestComponent } from '../leaverequest/leaverequest.component';
import { NotificationComponent } from '../notification/notification.component';
import { GetClassStudentListResolver } from '../student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from '../student/student-share-components/get-student-list-resolver.service';
import { StudentAttendenceComponent } from './student-attendence/student-attendence.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TermTestResultsComponent } from './term-test-results/term-test-results.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,

    children: [
      {
        path: 'mark-attendence',
        component: StudentAttendenceComponent,
        resolve: { studentList: GetStudentListForAttendenceResolver },
      },
      {
        path: 'student-list',
        component: StudentListComponent,
        resolve: { studentList: GetClassStudentListResolver },
      },
      {
        path: 'add-student-result',
        component: TermTestResultsComponent,
      },
      {
        path: 'leave-request',
        component: LeaverequestComponent,
      },
      {
        path: 'teacher-notification',
        component: NotificationComponent,
        resolve: { notifications: NotificationResolver },
      },
      {
        path: 'teacher-profile',
        component: TeacherProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
