import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { LeaveService } from 'src/app/services/leave.service';
import { UserLogInService } from '../homepage/login/user-login.service';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css'],
})
export class LeaverequestComponent implements OnInit {
  loginUserData: LogInUserModel;
  //to remove
  leaveDate;
  status;
  type;
  //end to remove

  leaveData; //leave data assign when the form submitted
  leaveTaken = 0;
  leaveAvailable = 41;
  userID = 'ST 1';
  name = 'Damith Anurada';
  role = 'Maths Teacher';
  email = 'damith96@gmail.com';
  mobile = '0702174282';
  description;
  date;

  leaveDetails = {
    number: 1234,
    date: '20-03-2020',
    type: 'full-day',
    status: 'pending',
  };

  userLeaveData: {
    username: string;
    fullname: string;
    email: string;
    mobile: string;
    leaveData: {
      numberofleavetaken: number;
      takenleavedates: [];
      numberofpendingleave: number;
      pendingdatas: [];
    };
  } = null;

  constructor(
    private userLoginService: UserLogInService,
    private leaveService: LeaveService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe(
      (loginData) => {
        this.loginUserData = loginData;
      },
      (error) => {
        console.log(error); //getting the data form the server side
      }
    );

    this.leaveService
      .getStaffData(this.loginUserData.getUserId, new Date().getFullYear())
      .subscribe(
        (data) => {
          console.log(data); //loock data in the console
          this.userLeaveData = data;
        },
        (error) => {},
        () => {
          //this is the place u can assign value
        }
      );
  }

  //execute when fom submitted
  onLeaveSubmit(formData) {
    if (formData.type === 'half-day') {
      formData.type = 0;
    }
    if (formData.type === 'short-leave') {
      formData.type = 1;
    }
    if (formData.type === 'full-day') {
      formData.type = 2;
    }

    //to delete
    this.leaveDate=formData.date;
    this.type=formData.type;
    this.status="pending";

    this.leaveService
      .makeNewLeaveRequest(
        this.loginUserData.getUserId,
        formData.date,
        formData.type,
        formData.description
      )
      .subscribe(
        (data) => {},
        (error) => {
          this.alertService.errorAlert(error.error.message);
          console.log(error);
        },
        () => {
          this.alertService.competeAlert('Leave Requsest Is In Progress....');
        }
      );
  }
}
