import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
})
export class StudentAttendenceComponent implements OnInit {
  students: { _id: string; username: string; isOnline: boolean }[] = [];
  prasent: boolean = false;
  absent: boolean = false;

  @ViewChild('btnM', { static: false }) btn: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.students = data['studentList'];
    });
  }

  // makePrasent(idRef, btn) {
  //   console.log(this.btn.nativeElement.querySelectorAll('.my-set'));
  // }

  make(event) {
    console.log(event);
  }

  makeAbsent(idRef) {
    this.absent = !this.absent;

    if (this.absent) {
      this.studentService.addStudentToAbsentList(idRef.value);
    } else {
      this.studentService.removeStudentInAbsentList(idRef.value);
    }
  }
}
