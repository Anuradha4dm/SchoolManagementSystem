import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavehandle',
  templateUrl: './leavehandle.component.html',
  styleUrls: ['./leavehandle.component.css']
})
export class LeavehandleComponent implements OnInit {
  leaveNumber = 92;
  leaveDate = "21-04-2020";
  leaveuserID = "TC 1";
  leaveType = "full-day";
  fname = "damit";
  lname = "anurada";
  description = "kbfjhbjfhvbhfkwd";
  leavesLeft = 41;
  role = "teacher";
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHandleClick(){
    this.show=true;
  }

}
