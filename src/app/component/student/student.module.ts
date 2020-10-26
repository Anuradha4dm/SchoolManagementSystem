import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AddSubjectsComponent, EditProfileComponent],
  declarations: [AddSubjectsComponent, EditProfileComponent],
  providers: [],
})
export class StudentModule {}
