import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'src/app/layout/layout.component';
import { LeavehandleComponent } from '../nonacademic/leavehandle/leavehandle.component';
import { NotificationResolver } from 'src/app/services/Notification-resolver.service';
import { LeaverequestComponent } from '../leaverequest/leaverequest.component';
import { NotificationComponent } from '../notification/notification.component';
import { GetClassStudentListResolver } from '../student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from '../student/student-share-components/get-student-list-resolver.service';
import { StudentAttendenceComponent } from './student-attendence/student-attendence.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TermTestResultsComponent } from './term-test-results/term-test-results.component';
import { EditTermResultsComponent } from './edit-term-results/edit-term-results.component';
import { TsendNotificationComponent } from './tsend-notification/tsend-notification.component';
import { EditTeacherProfileComponent } from './edit-teacher-profile/edit-teacher-profile.component';

import { AddNewProfileComponent } from '../admin/add-new-profile/add-new-profile.component';
import { AddTeacherComponent } from '../admin/add-teacher/add-teacher.component';
import { AddNonAcademicComponent } from '../admin/add-non-academic/add-non-academic.component';
import { AddClassComponent } from '../admin/add-class/add-class.component';
import { ModifyClassComponent } from '../nonacademic/modify-class/modify-class.component';
import { ViewOLComponent } from '../nonacademic/view-ol/view-ol.component';
import { ViewALComponent } from '../nonacademic/view-al/view-al.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,

    children: [
      {
        path: 'teacher-profile',
        component: TeacherProfileComponent,
      },
      {
        path: 'edit-teacher/:id',
        component: EditTeacherProfileComponent,
      },
      {
        path: 'mark-attendence',
        component: StudentAttendenceComponent,
        resolve: { studentList: GetStudentListForAttendenceResolver },
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
        path: 'view-student-result',
        component: EditTermResultsComponent,
      },
      {
        path: 'teacher-send-messages',
        component: TsendNotificationComponent,
      },
      {
        path: 'view-ol-results',
        component: ViewOLComponent
      },
      {
        path: 'view-al-results',
        component: ViewALComponent
      },
      //to remove start
      {
        path: 'student-list',
        component: StudentListComponent,
        resolve: { studentList: GetClassStudentListResolver },
      },
      {
        path: 'leave-handle',
        component: LeavehandleComponent,
      },
      {
        path: 'new',
        component: AddNewProfileComponent,
      },
      {
        path: 'add-teacher',
        component: AddTeacherComponent,
      },
      {
        path: 'add-non',
        component: AddNonAcademicComponent,
      },
      {
        path: 'add-class',
        component: AddClassComponent
      },
      {
        path: 'edit-class',
        component: ModifyClassComponent
      },
     
      //to remove end
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
