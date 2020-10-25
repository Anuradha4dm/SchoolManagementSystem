import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { NotificationComponent } from './component/notification/notification.component';
import { UserProfileComponent } from './component/student/user-profile/user-profile.component';
import { AddNewProfileComponent } from './component/admin/add-new-profile/add-new-profile.component';
import { StudentListComponent } from './component/teacher/student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationResolver } from './services/Notification-resolver.service';
import { NotificationInfoComponent } from './component/notification/notification-info/notification-info.component';
import { AddSubjectsComponent } from './component/student/add-subjects/add-subjects.component';
import { MarkPresentDirective } from './directive/mark-present.directive';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';
import { StudentAttendenceComponent } from './component/teacher/student-attendence/student-attendence.component';
import { NotificatinHiddenDirective } from './directive/notificatin-hidden.directive';

import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { HomeComponent } from './component/homepage/home/home.component';
import { StaffComponent } from './component/homepage/staff/staff.component';
import { AboutComponent } from './component/homepage/about/about.component';
import { DownloadsComponent } from './component/homepage/downloads/downloads.component';
import { LoginComponent } from './component/login/login.component';

import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { NotificationCloseDirective } from './directive/notification-close.directive';
import { EditProfileComponent } from './component/student/edit-profile/edit-profile.component';
import { FilterStudentPipe } from './component/teacher/filter-student.pipe';


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

    HomelayoutComponent,
    HomeComponent,
    StaffComponent,
    AboutComponent,
    DownloadsComponent,
    LoginComponent,

    ConfirmationDialogComponent,
    NotificationCloseDirective,
    EditProfileComponent,
    FilterStudentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [
    NotificationResolver,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
