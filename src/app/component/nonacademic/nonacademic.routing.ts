import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';

import { AddALresultsComponent } from './add-alresults/add-alresults.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AlAnalysisComponent } from './al-analysis/al-analysis.component';
import { ClassChangeComponent } from './class-change/class-change.component';
import { ClassHandlerComponent } from './class-handler/class-handler.component';
import { ExamLayoutComponent } from './exam-layout/exam-layout.component';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { OlAnalysisComponent } from './ol-analysis/ol-analysis.component';
import { RegisterAlSubjectsComponent } from './register-al-subjects/register-al-subjects.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      { path: 'handle-leave', component: LeavehandleComponent },
      { path: 'add-event', component: AddEventComponent },
      { path: 'send-notification', component: SendNotificationComponent },
      { path: 'class-handler', component: ClassHandlerComponent },
      { path: 'student-class-change', component: ClassChangeComponent },
      { path: 'add-advance-level-result', component: AddALresultsComponent },
      { path: 'add-ordinary-level-result', component: AddOLresultsComponent },
      { path: 'exams', component: ExamLayoutComponent },
      { path: 'main-exam-layout', component: ViewLayoutComponent },
      {
        path: 'register-advance-level-stream',
        component: RegisterAlSubjectsComponent,
      },
      {
        path: 'ol-analysis',
        component: OlAnalysisComponent,
      },
      {
        path: 'al-analysis',
        component: AlAnalysisComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAcademicRoutingModule {}
