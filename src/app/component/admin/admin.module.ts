import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewProfileComponent } from './add-new-profile/add-new-profile.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddNonAcademicComponent } from './add-non-academic/add-non-academic.component';
import { AddClassComponent } from './add-class/add-class.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule
  ],

  exports: [AddNewProfileComponent],
  
  declarations: [
    AddNewProfileComponent,
    AddTeacherComponent,
    AddNonAcademicComponent,
    AddClassComponent,
    AddStudentComponent
  ],

  providers: [],
})
export class AdminModule {}
