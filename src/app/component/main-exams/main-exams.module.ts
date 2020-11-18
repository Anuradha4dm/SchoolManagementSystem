import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainExamsRoutingModule } from './main-exams-routing.module';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AddALresultsComponent } from './add-alresults/add-alresults.component';


@NgModule({
  declarations: [AddOLresultsComponent, AddALresultsComponent],
  imports: [
    CommonModule,
    MainExamsRoutingModule
  ],
  exports: [
    AddOLresultsComponent,
    AddALresultsComponent
  ]
})
export class MainExamsModule { }
