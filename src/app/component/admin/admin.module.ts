import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewProfileComponent } from './add-new-profile/add-new-profile.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddNonAcademicComponent } from './add-non-academic/add-non-academic.component';
import { AddClassComponent } from './add-class/add-class.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AddNewProfileComponent],
  declarations: [AddNewProfileComponent, AddTeacherComponent, AddNonAcademicComponent, AddClassComponent],
  providers: [],
})
export class AdminModule {}
