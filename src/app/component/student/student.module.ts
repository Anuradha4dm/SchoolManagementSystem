import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { ViewResultComponent } from './view-result/view-result.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AddSubjectsComponent, EditProfileComponent, ViewResultComponent],
  declarations: [
    AddSubjectsComponent,
    EditProfileComponent,
    ViewResultComponent,
    ViewSubjectsComponent,
  ],
  providers: [],
})
export class StudentModule {}
