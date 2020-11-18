import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { Student } from 'src/app/models/student.model';
import { TermResults } from 'src/app/models/teacher.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-term-test-results',
  templateUrl: './term-test-results.component.html',
  styleUrls: ['./term-test-results.component.css'],
})
export class TermTestResultsComponent implements OnInit {
  loginUserData: LogInUserModel;

  studentList: { _id: string; firstname: string; lastname: string }[];
  termResult = new TermResults();
  subjectList = [];
  fullname: string;

  element: string = '';

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private alterMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });
    console.log('this is the data');

    this.teacherService
      .getStudentListForAddResult(this.loginUserData.getUserId)
      .subscribe(
        (data) => {
          console.log(data);
          this.studentList = data.studentListData;
          this.termResult.grade = data.grade;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onAddResultsClick(id, fname, lname) {
    this.teacherService
      .getSubjectsOfSpecificStudent(id, this.termResult.grade)
      .subscribe(
        (data) => {
          this.subjectList = data.subjectlist;
          console.log(data);
        },
        (error) => {
          this.alterMessageService.errorAlert(error.error.message);
        },
        () => {
          if (this.subjectList.length === 0) {
            this.alterMessageService.errorAlert(
              'Student Is Not Register For Subjects'
            );
          }
        }
      );
    this.termResult.studentid = id;
    this.fullname = fname + ' ' + lname;
  }

  onSubmitClick(value) {
    var resultArray = [];

    for (var key in value) {
      resultArray.push({ subjectSubjectid: key, marks: value[key] });
    }

    this.termResult.result = resultArray;
    console.log(value);
    this.teacherService.addStudentResult(this.termResult).subscribe(
      (data) => {},
      (error) => {
        this.alterMessageService.errorAlert(error.error.message);
      },
      () => {
        this.alterMessageService.competeAlert('Result Added Successfully');
      }
    );
    this.element = 'modal';
  }

  onFileChange(event) {
    this.teacherService.xlsxFileReader(event);
  }
}
