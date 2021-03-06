import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StudentRoutingModel } from './student.routing';
import { ViewResultComponent } from './view-result/view-result.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';
import { ParticipationComponent } from './participation/participation.component';
import { SubjectNamePipe } from './subject-name.pipe';
import { SportsHandleComponent } from './sports-handle/sports-handle.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [FormsModule, CommonModule, ChartsModule],
  exports: [
    AddSubjectsComponent,
    EditProfileComponent,
    ViewResultComponent,
    DashboardComponent,
    StudentRoutingModel,
  ],
  declarations: [
    AddSubjectsComponent,
    EditProfileComponent,
    ViewResultComponent,
    ViewSubjectsComponent,
    DashboardComponent,
    ParticipationComponent,
    SubjectNamePipe,
    SportsHandleComponent,
  ],
  providers: [],
})
export class StudentModule {}
