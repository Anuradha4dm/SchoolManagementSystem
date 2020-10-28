import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddSubjectResolverService } from './student-resolvers/add-subject-resolver.service';
import { ViewResultComponent } from './view-result/view-result.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AddSubjectsComponent, EditProfileComponent, ViewResultComponent],
  declarations: [
    AddSubjectsComponent,
    EditProfileComponent,
    ViewResultComponent,
  ],
  providers: [],
})
export class StudentModule {}
