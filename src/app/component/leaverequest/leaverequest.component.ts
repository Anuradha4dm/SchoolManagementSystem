import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

  leaveTaken = 0;
  leaveAvailable = 3;
  constructor() { }

  ngOnInit(): void {
  }

}