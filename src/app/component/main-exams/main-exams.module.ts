import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainExamsRoutingModule } from './main-exams-routing.module';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AddALresultsComponent } from './add-alresults/add-alresults.component';
import { RegisterForALComponent } from './register-for-al/register-for-al.component';
import { RegisterForOLComponent } from './register-for-ol/register-for-ol.component';
import { ExamLayoutComponent } from './exam-layout/exam-layout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddOLresultsComponent, AddALresultsComponent, RegisterForALComponent, RegisterForOLComponent, ExamLayoutComponent],
  imports: [
    CommonModule,
    MainExamsRoutingModule,
    FormsModule
  ],
  exports: [
    ExamLayoutComponent,
    AddOLresultsComponent,
    AddALresultsComponent,
    RegisterForOLComponent,
    RegisterForALComponent,
  ]
})
export class MainExamsModule { }
