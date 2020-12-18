import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterAlSubjectsComponent } from './register-al-subjects/register-al-subjects.component';
import { ModifyClassComponent } from './modify-class/modify-class.component';

import { ChartsModule } from 'ng2-charts';
import { AlAnalysisComponent } from './al-analysis/al-analysis.component';
import { OlAnalysisComponent } from './ol-analysis/ol-analysis.component';
import { ViewALComponent } from './view-al/view-al.component';
import { ViewOLComponent } from './view-ol/view-ol.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { NonProfileComponent } from './non-profile/non-profile.component';

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
    RegisterForOLComponent,
    RegisterAlSubjectsComponent,
    ModifyClassComponent,
    OlAnalysisComponent,
    AlAnalysisComponent,
    ViewALComponent,
    ViewOLComponent,
    ViewLayoutComponent,
    NonProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NonAcademicRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ChartsModule,
  ],
  exports: [
    LeavehandleComponent,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule,
  ],
})
export class NonacademicModule {}
