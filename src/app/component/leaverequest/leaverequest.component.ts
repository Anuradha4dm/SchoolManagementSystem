import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

  leaveData; //leave data assign when the form submitted
  leaveTaken = 0;
  leaveAvailable = 3;

  constructor() { }

  ngOnInit(): void {
  }

  //execute when fom submitted
  getLeaveData(leavedata){
    this.leaveData = leavedata.value;
  }
}
