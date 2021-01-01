import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { element } from 'protractor';
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
  show: boolean = false;
  fileSelected: boolean = false;
  fullname: string;

  resultList=[]; //contain id,name and mark of specific student results 

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private alterMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });

    this.teacherService.getClassStudentList(this.loginUserData.getUserId)
      .subscribe(
        (data) => {
          this.studentList = data.studentListData;
          this.termResult.grade = data.grade;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onCheckClick(student) {
    var subjectList = []; //contain all subjectname and id of one student
    var subjectid = []; //onlysubjectid of subjects 
    this.resultList= [];

    this.teacherService.getSubjectsOfSpecificStudent(student._id, this.termResult.grade)
      .subscribe(
        (data) => {
          data.subjectlist.forEach(element => {
            subjectList.push(element);
            subjectid.push(element.subjectid);
          });
        },
        (error) => {
          this.alterMessageService.errorAlert(error.error.message);
        },
        () => {
          if (subjectList.length === 0) {
            this.alterMessageService.errorAlert(
              'Student Is Not Register For Subjects'
            );
          }
          this.teacherService.mapDataFormTheServiceToStudent(student._id,subjectid).map((element)=>{
            subjectList.forEach((data)=>{
              if(element.subjectid==data.subjectid)
                this.resultList.push({subjectname: data.subjectname,id: data.subjectid,mark: element.marks});
            });
          })
        }
      );

    this.termResult.studentid = student._id;
    this.fullname = student.firstname + ' ' + student.lastname;
    this.show = true;
  }

  //Submit student marks with id to database
  onSubmitClick(value) {
    var resultArray = [];
    console.log(value)
    for (var key in value) {
      resultArray.push({ subjectSubjectid: key, marks: value[key] });
    }

    this.termResult.result = resultArray;
    console.log(this.termResult)
    this.teacherService.addStudentResult(this.termResult).subscribe(
      (data) => {},
      (error) => {
        this.alterMessageService.errorAlert(error.error.message);
      },
      () => {
        this.alterMessageService.competeAlert('Result Added Successfully');
      }
    );
  }

  //Read excel sheet to json object
  onFileChange(event) {
    this.fileSelected=this.teacherService.xlsxFileReader(event)
  }
}
