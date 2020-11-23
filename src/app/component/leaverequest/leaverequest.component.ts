import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Colors, ThemeService } from 'ng2-charts';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { LeaveService } from 'src/app/services/leave.service';
import { UserLogInService } from '../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic/nonacademic.service';
import { TeacherService } from '../teacher/teacher.service';
import { ChartsModule } from 'ng2-charts';
          

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css'],
})
export class LeaverequestComponent implements OnInit {
  loggedUserID:string;
  role: string;
  profile;
  pendingLeaves; //to contain logged user pending data
  leaveType: number =2;

  public chartData = [];
  public chartLabel = ['Leaves Available','Leaves Taken'];

  public chartOption = {
    responsive: true,
    legend: false
  };


  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private nonService: NonAcademicService,
    private leaveService: LeaveService,
    private alertService: AlertMessageService,
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe(
      (loginData) => {
        this.loggedUserID = loginData.getUserId;
        this.role = loginData.role;
      },
      (error) => {
        console.log(error); //getting the data form the server side
      }
    );

    //Check logged user non academic or academic
    if(this.role.toLowerCase()=="teacher"){
      this.teacherService.getTeacherProfileData(this.loggedUserID)
        .subscribe((data)=>{
          this.profile = data;
          this.chartData=[data.numberofleaves,41-data.numberofleaves];
        });
    }

    this.nonService.getPendingRequest()
      .subscribe((data)=>{
          this.pendingLeaves=data.pendingLeaveData.filter((data)=>{
            return data.userid == this.loggedUserID;
        });
      });
  }

  //Execute when fom submitted
  onLeaveSubmit(formData) {
    this.leaveService.makeNewLeaveRequest(
        this.loggedUserID,
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
          this.ngOnInit();
        }
      );
  }

  //Execute when cancel button click
  onCancelClick(){
    this.ngOnInit();
  }

}
