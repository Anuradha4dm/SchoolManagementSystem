import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { AddClassComponent } from '../admin/add-class/add-class.component';
import { AddNewProfileComponent } from '../admin/add-new-profile/add-new-profile.component';
import { AddNonAcademicComponent } from '../admin/add-non-academic/add-non-academic.component';
import { AddTeacherComponent } from '../admin/add-teacher/add-teacher.component';

import { AddALresultsComponent } from './add-alresults/add-alresults.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AlAnalysisComponent } from './al-analysis/al-analysis.component';
import { ClassChangeComponent } from './class-change/class-change.component';
import { ClassHandlerComponent } from './class-handler/class-handler.component';
import { ExamLayoutComponent } from './exam-layout/exam-layout.component';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { ModifyClassComponent } from './modify-class/modify-class.component';
import { NonProfileComponent } from './non-profile/non-profile.component';
import { OlAnalysisComponent } from './ol-analysis/ol-analysis.component';
import { RegisterAlSubjectsComponent } from './register-al-subjects/register-al-subjects.component';
import { RegisterForALComponent } from './register-for-al/register-for-al.component';
import { RegisterForOLComponent } from './register-for-ol/register-for-ol.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      { path: 'profile', component: NonProfileComponent },
      { path: 'handle-leave', component: LeavehandleComponent },
      { path: 'add-event', component: AddEventComponent },
      { path: 'send-notification', component: SendNotificationComponent },
      { path: 'class-handler', component: ModifyClassComponent },
      { path: 'student-class-change', component: ClassChangeComponent },
      { path: 'add-advance-level-result', component: AddALresultsComponent },
      { path: 'add-ordinary-level-result', component: AddOLresultsComponent },
      { path: 'main-exam-layout', component: ExamLayoutComponent },
      { path: 'add-new-class', component: AddClassComponent },
      { path: 'add-new-teacher', component: AddTeacherComponent },
      { path: 'add-non-academic', component: AddNonAcademicComponent },
      { path: 'teacher-handler', component: ClassHandlerComponent },

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
      {
        path: 'al-registration',
        component: RegisterForALComponent,
      },
      {
        path: 'ol-registration',
        component: RegisterForOLComponent,
      },
      {
        path: 'new-student',
        component: AddNewProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAcademicRoutingModule {}
