import { Component, Input, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-for-ol',
  templateUrl: './register-for-ol.component.html',
  styleUrls: ['./register-for-ol.component.css'],
})
export class RegisterForOLComponent implements OnInit {
  @Input() year;
  @Input() studentList;
  loggedUserID: string;
  show: boolean = false;
  selectedStudent;
  subjectList; //contain sunject list of selected student
  page: number = 1;
  index;
  verified:boolean=true; //check both index numbers ara same

  constructor(
    private userLoginService: UserLogInService,
    private nonService: NonAcademicService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loggedUserID = userData.getUserId;
    });

    this.nonService
      .getOrdinaryLevelStudentListForRegister()
      .subscribe((data) => {
        this.studentList = data.studentList;
      });
  }

  onRowClick(student) {
    this.selectedStudent = student;
    this.nonService.getStudentSubjectListForRegistration(this.selectedStudent._id,"ol").subscribe((data)=>{
      this.subjectList=data.subjects;
    });

    this.show = true;
  }

  verifyIndex(text){
    if(text==this.index)
      this.verified=true;
    else
      this.verified=false;
  }

  //Executes when form submitted
  onSubmit() {
    var list=[];

    this.subjectList.forEach(element => {
      list.push(element.mesubjectname);  
    });

    this.nonService.registerStudentsForExams(
        this.year,
        this.index,
        this.selectedStudent._id,
        1,
        false,
        this.selectedStudent.class.grade,
        "",
        list
    ).subscribe((data) => {
        if(!data)
          this.alertService.errorAlert("You Have already registered this student...");
        else
          this.alertService.competeAlert("Student registered successfully...");
      });
  }
}
