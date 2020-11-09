import { Component, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-leavehandle',
  templateUrl: './leavehandle.component.html',
  styleUrls: ['./leavehandle.component.css'],
})
export class LeavehandleComponent implements OnInit {
  leaveNumber = 92;
  leaveDate = '21-04-2020';
  leaveuserID = 'TC 1';
  leaveType = 'full-day';
  fname = 'damit';
  lname = 'anurada';
  description = 'kbfjhbjfhvbhfkwd';
  leavesLeft = 41;
  role = 'teacher';
  show = false;

  constructor(private nonAcademicService: NonAcademicService) {}

  ngOnInit(): void {
    this.nonAcademicService.getPendingRequest().subscribe((data) => {
      //this is the palce leave comes
      console.log(data);
    });
  }

  onHandleClick() {
    this.show = true;
  }
}
