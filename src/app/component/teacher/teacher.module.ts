import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkPresentDirective } from 'src/app/directive/mark-present.directive';
import { FilterStudentPipe } from './filter-student.pipe';
import { StudentAttendenceComponent } from './student-attendence/student-attendence.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [
    StudentListComponent,
    StudentAttendenceComponent,
    MarkPresentDirective,
    FilterStudentPipe,
  ],
  declarations: [
    StudentListComponent,
    StudentAttendenceComponent,
    MarkPresentDirective,
    FilterStudentPipe,
  ],
  providers: [],
})
export class TeacherModule {}
