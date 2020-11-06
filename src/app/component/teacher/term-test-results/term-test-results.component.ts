import { Component, OnInit } from '@angular/core';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { Student } from 'src/app/models/student.model';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-term-test-results',
  templateUrl: './term-test-results.component.html',
  styleUrls: ['./term-test-results.component.css'],
})
export class TermTestResultsComponent implements OnInit {
  loginUserData: LogInUserModel;
  grade: string;

  term: string = 'term1';
  selectedStudentID: string = '';
  studentList: { _id: string; firstname: string; lastname: string }[];

  //to remove start
  classStudents = [
    {
      id: '239',
      fname: 'Kamal',
      lname: 'Silva',
      average: 30.87,
      position: 1,
    },
    {
      id: '249',
      fname: 'Kamal',
      lname: 'Silva',
      average: 30.87,
      position: 2,
    },
    {
      id: '2359',
      fname: 'Kamal',
      lname: 'Silva',
      average: 30.87,
      position: 3,
    },
    {
      id: '2350',
      fname: 'Kamal',
      lname: 'Silva',
      average: 30.87,
      position: 4,
    },
  ];

  subjectList = [];
  //to remove end

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });

    this.teacherService
      .getStudentListForAddResult(this.loginUserData.getUserId)
      .subscribe((data) => {
        this.studentList = data.studentListData;
        this.grade = data.grade;
      });
  }

  onAddResultsClick(id) {
    this.teacherService
      .getSubjectsOfSpecificStudent(id, this.grade)
      .subscribe((data) => {
        this.subjectList = data.subjectlist;

        console.log(data);
      });
  }
}
