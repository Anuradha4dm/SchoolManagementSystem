import { Component, OnInit } from '@angular/core';
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
  show = false;

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

  //Execute when allow button click 
  handleLeave(text){
    if(text=='allow')
      this.alertService.competeAlert('Leave Accepted Successfully...');
    else
      this.alertService.errorAlert('Leave Rejected Successfully...');
      
    this.show = false;
    this.ngOnInit();
    console.log(text);
  }

  //Execute when back button click 
  onBackClick(){
    this.show = false;
  }
}
