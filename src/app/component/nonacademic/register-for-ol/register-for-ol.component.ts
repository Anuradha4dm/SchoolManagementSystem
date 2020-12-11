import { Component, Input, OnInit } from '@angular/core';
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
  page: number = 1;
  index;
  verified:boolean=true; //check both index numbers ara same

  constructor(
    private userLoginService: UserLogInService,
    private nonService: NonAcademicService
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
    this.nonService
      .registerStudentsForExams(
        this.loggedUserID,
        this.year,
        343134,
        'ST_1',
        2,
        false,
        ['add', 'as']
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
