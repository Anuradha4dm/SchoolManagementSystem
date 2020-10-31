import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkPresentDirective } from 'src/app/directive/mark-present.directive';
import { FilterStudentPipe } from './filter-student.pipe';
import { StudentAttendenceComponent } from './student-attendence/student-attendence.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TermTestResultsComponent } from './term-test-results/term-test-results.component';

@NgModule({
  imports: [FormsModule, CommonModule,MatExpansionModule],
  exports: [
    StudentListComponent,
    StudentAttendenceComponent,
    MarkPresentDirective,
    FilterStudentPipe,
    TermTestResultsComponent,
  ],
  declarations: [
    StudentListComponent,
    StudentAttendenceComponent,
    MarkPresentDirective,
    FilterStudentPipe,
    TeacherProfileComponent,
    TermTestResultsComponent,
  ],
  providers: [],
})
export class TeacherModule {}
