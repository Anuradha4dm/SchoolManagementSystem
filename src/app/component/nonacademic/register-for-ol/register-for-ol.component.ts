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
  loggedUserID: string;
  show: boolean = false;
  page: number = 1;

  studentList: {
    firstname: string;
    lastname: string;
    _id: string;
    class: { grade: string };
  }[] = [];

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

  onRowClick() {
    this.show = true;
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
