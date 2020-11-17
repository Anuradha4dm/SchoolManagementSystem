import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { map } from 'rxjs/operators';
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
  userLeaveData;
  profileData;
  prevLeaveData;
  leaveType: number =2;
  userID: string;

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
          console.log(data); //lock data in the console
          this.userLeaveData = data;
        },
        (error) => {},
        () => {
          //this is the place u can assign value
          this.profileData = this.userLeaveData.profileData;
          this.prevLeaveData = this.profileData.leaveData;
          this.userID = this.loginUserData.getUserId; 
        }
      );
  }

  //execute when fom submitted
  onLeaveSubmit(formData) {
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

  onCancelClick(){
    window.location.reload();
  }

}
