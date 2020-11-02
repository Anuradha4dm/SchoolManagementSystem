import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-term-test-results',
  templateUrl: './term-test-results.component.html',
  styleUrls: ['./term-test-results.component.css']
})
export class TermTestResultsComponent implements OnInit {
  term: string = 'term1';
  selectedStudentID: string = '';
  studentList: Student[];

  //to remove start
  classStudents = [
    {
      id: '239',fname: 'Kamal',lname: 'Silva',average: 30.87,position: 1
    },
    {
      id: '249',fname: 'Kamal',lname: 'Silva',average: 30.87,position: 2
    },
    {
      id: '2359',fname: 'Kamal',lname: 'Silva',average: 30.87,position: 3
    }, {
      id: '2350',fname: 'Kamal',lname: 'Silva',average: 30.87,position: 4
    }
  ];

  subjectList = [
    {name: 'Maths',marks: 89},
    {name: 'Sinhala',marks: 95},
    {name: 'Buddhism',marks: 67},
    {name: 'History',marks: 75},
    {name: 'Commerce',marks: 56},
    {name: 'English',marks: 70},
  ];
  //to remove end

  constructor() { }

  ngOnInit(): void {
  }

}
