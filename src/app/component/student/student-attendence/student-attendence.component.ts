import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
})
export class StudentAttendenceComponent implements OnInit {
  students = [
    { username: 'student1', email: 'student1@gmail.com', moble: '0771346601' },
    { username: 'student2', email: 'student2@gmail.com', moble: '0771346601' },
    { username: 'student3', email: 'student3@gmail.com', moble: '0771346601' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
