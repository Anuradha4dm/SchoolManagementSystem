import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainExamsRoutingModule } from './main-exams-routing.module';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';


@NgModule({
  declarations: [AddOLresultsComponent],
  imports: [
    CommonModule,
    MainExamsRoutingModule
  ],
  exports: [
    AddOLresultsComponent,
  ]
})
export class MainExamsModule { }
