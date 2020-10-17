import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { NotificationComponent } from './component/notification/notification.component';
import { UserProfileComponent } from './component/student/user-profile/user-profile.component';
import { AddNewProfileComponent } from './component/admin/add-new-profile/add-new-profile.component';
import { StudentListComponent } from './component/teacher/student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotificationService } from './services/notification.service';
import { NotificationResolver } from './services/Notification-resolver.service';
import { NotificationInfoComponent } from './component/notification/notification-info/notification-info.component';
import { AddSubjectsComponent } from './component/student/add-subjects/add-subjects.component';
import { MarkPresentDirective } from './directive/mark-present.directive';

import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';
import { StudentService } from './services/student.service';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { StudentAttendenceComponent } from './component/teacher/student-attendence/student-attendence.component';
import { NotificatinHiddenDirective } from './directive/notificatin-hidden.directive';
import { StudentListService } from './component/teacher/student-list.service';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { NotificationCloseDirective } from './directive/notification-close.directive';
import { EditProfileComponent } from './component/student/edit-profile/edit-profile.component';
import { StudentProfileService } from './services/studentProfile.service';
import { Student } from './models/student.model';
import { StudentPerformanceService } from './component/student/student-preformance.service';

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
    NotificatinHiddenDirective,
    ConfirmationDialogComponent,
    NotificationCloseDirective,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    NotificationService,
    NotificationResolver,
    StudentService,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
    StudentListService,
    ConfirmationDialogService,
    StudentProfileService,
    StudentPerformanceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
