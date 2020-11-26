import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationResolver } from './services/Notification-resolver.service';
import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { GetStudentListForAttendenceResolver } from './component/student/student-share-components/get-student-list-resolver.service';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { StudentModule } from './component/student/student.module';
import { AdminModule } from './component/admin/admin.module';
import { TeacherModule } from './component/teacher/teacher.module';
import { NotificationModule } from './component/notification/notification.module';
import { HomePageModule } from './component/homepage/homepage.module';
import { LeaverequestComponent } from './component/leaverequest/leaverequest.component';
import { NonacademicModule } from './component/nonacademic/nonacademic.module';
import { SendEmilComponent } from './component/send-emil/send-emil.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { MainResultAnalysisModule } from './component/main-result-analysis/main-result-analysis.module';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SiderbarComponent,
    ConfirmationDialogComponent,
    LeaverequestComponent,
    SendEmilComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    ChartsModule,
    HttpClientModule,
    StudentModule,
    AdminModule,
    TeacherModule,
    NonacademicModule,
    NotificationModule,
    HomePageModule,
    MainResultAnalysisModule,
  ],
  providers: [
    NotificationResolver,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
