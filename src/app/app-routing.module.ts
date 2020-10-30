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
import { HomeComponent } from './component/homepage/home/home.component';
import { StaffComponent } from './component/homepage/staff/staff.component';
import { DownloadsComponent } from './component/homepage/downloads/downloads.component';
import { AboutComponent } from './component/homepage/about/about.component';

import { EditProfileComponent } from './component/student/edit-profile/edit-profile.component';
import { TeacherProfileComponent } from './component/teacher/teacher-profile/teacher-profile.component';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ViewResultComponent } from './component/student/view-result/view-result.component';
import { AddSubjectResolverService } from './component/student/student-resolvers/add-subject-resolver.service';
import { ViewSubjectsComponent } from './component/student/view-subjects/view-subjects.component';
import { GetRegisteredSubjectList } from './component/student/student-share-components/get-subject-resolver.service';

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
  {
    path: 'addsubjects',
    component: AddSubjectsComponent,
    resolve: { student: AddSubjectResolverService },
  },
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
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-result', component: ViewResultComponent },
  { path: 'edit-profile', component: AddNewProfileComponent },
  { path: 'homepage-home', component: HomeComponent },
  { path: 'homepage-staff', component: StaffComponent },
  { path: 'homepage-about', component: AboutComponent },
  { path: 'homepage-downloads', component: DownloadsComponent },

  { path: 'edit-profile/:id', component: EditProfileComponent },
  { path: 'add-new-profile', component: AddNewProfileComponent },
  { path: 'teacher-profile', component: LeaverequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
