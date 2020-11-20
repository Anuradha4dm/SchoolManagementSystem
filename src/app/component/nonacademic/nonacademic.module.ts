import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { HttpClientModule } from '@angular/common/http';

import { NonAcademicRoutingModule } from './nonacademic.routing';
import { AddEventComponent } from './add-event/add-event.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { FormsModule } from '@angular/forms';
import { ClassHandlerComponent } from './class-handler/class-handler.component';
import { ClassChangeComponent } from './class-change/class-change.component';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AddALresultsComponent } from './add-alresults/add-alresults.component';
import { ExamLayoutComponent } from './exam-layout/exam-layout.component';
import { RegisterForALComponent } from './register-for-al/register-for-al.component';
import { RegisterForOLComponent } from './register-for-ol/register-for-ol.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LeavehandleComponent,
    AddEventComponent,
    SendNotificationComponent,
    ClassHandlerComponent,
    ClassChangeComponent,
    AddOLresultsComponent,
    AddALresultsComponent,
    ExamLayoutComponent,
    RegisterForALComponent,
    RegisterForOLComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NonAcademicRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [LeavehandleComponent, FormsModule, HttpClientModule],
})
export class NonacademicModule {}
