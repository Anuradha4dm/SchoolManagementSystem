import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { NotificationComponent } from './component/notification/notification.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { AddNewProfileComponent } from './component/user-profile/add-new-profile/add-new-profile.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentAttendenceComponent } from './component/student/student-attendence/student-attendence.component';
import { NotificationService } from './services/notification.service';
import { NotificationResolver } from './services/Notification-resolver.service';
import { NotificationInfoComponent } from './component/notification/notification-info/notification-info.component';
import { AddSubjectsComponent } from './component/student/add-subjects/add-subjects.component';
import { MarkPresentDirective } from './directive/mark-present.directive';
import { MarkAbsentDirective } from './directive/mark-absent.directive';
import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';
import { StudentService } from './services/student.service';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SiderbarComponent,
    NotificationComponent,
    UserProfileComponent,
    AddNewProfileComponent,
    StudentListComponent,
    StudentAttendenceComponent,
    NotificationInfoComponent,
    AddSubjectsComponent,
    MarkPresentDirective,
    MarkAbsentDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    NotificationService,
    NotificationResolver,
    StudentService,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
