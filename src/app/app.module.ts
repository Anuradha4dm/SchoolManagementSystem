import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SiderbarComponent } from './component/siderbar/siderbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationResolver } from './services/Notification-resolver.service';

import { GetClassStudentListResolver } from './component/student/student-share-components/get-class-student-list-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentAttendenceComponent } from './component/teacher/student-attendence/student-attendence.component';
import { NotificatinHiddenDirective } from './directive/notificatin-hidden.directive';
import { HomelayoutComponent } from './component/homepage/homelayout/homelayout.component';
import { HomeComponent } from './component/homepage/home/home.component';
import { StaffComponent } from './component/homepage/staff/staff.component';
import { AboutComponent } from './component/homepage/about/about.component';
import { DownloadsComponent } from './component/homepage/downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SiderbarComponent,
    StudentAttendenceComponent,
    NotificatinHiddenDirective,
    HomelayoutComponent,
    HomeComponent,
    StaffComponent,
    AboutComponent,
    DownloadsComponent,
  ],
  providers: [
    NotificationResolver,
    GetClassStudentListResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
