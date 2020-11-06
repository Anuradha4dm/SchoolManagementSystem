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
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './component/event/add-event/add-event.component';
import { DeleteEventComponent } from './component/event/delete-event/delete-event.component';
import { EmailComponent } from './email/email.component';
import { EmailhandleComponent } from './component/emailhandle/emailhandle.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SiderbarComponent,

    ConfirmationDialogComponent,

    EventComponent,

    AddEventComponent,

    DeleteEventComponent,

    EmailComponent,

    EmailhandleComponent,

   

    

  



   
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
    HttpClientModule,
    StudentModule,
    AdminModule,
    TeacherModule,
    NotificationModule,
    HomePageModule,
  ],
  providers: [
    NotificationResolver,
    GetStudentListForAttendenceResolver,
    GetClassStudentListResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
