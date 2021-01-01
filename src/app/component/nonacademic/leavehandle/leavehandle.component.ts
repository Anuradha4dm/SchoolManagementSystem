import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs/operators';
import { LeaveData } from 'src/app/models/leavedata';
import { TeacherProfileData } from 'src/app/models/teacher.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { TeacherService } from '../../teacher/teacher.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-leavehandle',
  templateUrl: './leavehandle.component.html',
  styleUrls: ['./leavehandle.component.css'],
})
export class LeavehandleComponent implements OnInit {
  pendingLeaves: LeaveData;  //contain all pending leave request data
  selectedLeave;
  teacherProfileData: TeacherProfileData;
  show: boolean;
  message: boolean =false;
  accept: boolean =false;
  leavetype:number;
  title: string;
  reason: string=' '; //contain the reason to reject leave
  page: number=1; //for pagination

  constructor(
    private nonAcademicService: NonAcademicService,
    private teacherService: TeacherService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.nonAcademicService.getPendingRequest()
      .subscribe((data) => {
      this.pendingLeaves = data;
      console.log(this.pendingLeaves);
    });
  }

  //Execute when click on row 
  onRowClick(leave){
    this.selectedLeave=this.pendingLeaves.pendingLeaveData
      .find((data)=>{
        return data.leaveid==leave.leaveid;
      });

    this.teacherService.getTeacherProfileData(leave.userid)
    .subscribe((data) => {
      this.teacherProfileData = data;
    });
    
    this.show = true;
  }

  //Execute when allow or reject button click 
  handleLeave(value,type){
    if(this.accept)
      this.title = "Your request on " + this.selectedLeave.leavedate+ " is accepted.";
    else
      this.title = "Your request on " + this.selectedLeave.leavedate + " is rejected.";

    if(type=="Full Day")
      this.leavetype=2;
    else
      this.leavetype=1;  
  
    this.message= true;
   // this.ngOnInit();
  }

  //Execute when back button click 
  onBackClick(){
    this.show = false;
    this.message =false;
  }

  onSendClick(){
    this.nonAcademicService.handleLeaves(
      this.selectedLeave.leaveid,
      this.accept,
      this.leavetype,
      this.title+" "+this.reason
    ).subscribe(
      (data)=>{console.log(this.selectedLeave.leavetype)},
      (error)=>{console.log(error)},
      ()=>{
        if(this.accept)
          this.alertService.competeAlert('Leave Accepted Successfully...');
        else
          this.alertService.errorAlert('Leave Rejected Successfully...');
        this.show=false;
        this.ngOnInit();
      });
  }
}
