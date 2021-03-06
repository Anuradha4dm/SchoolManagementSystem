import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { MarkAttendenceTeacherComponent } from './component/mark-attendence-teacher/mark-attendence-teacher.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { JWTInterceptor } from './services/auth-interceptor.service';

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
    MarkAttendenceTeacherComponent,
    WelcomePageComponent,
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

    NgxQRCodeModule,
  ],
  providers: [
    NotificationResolver,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
