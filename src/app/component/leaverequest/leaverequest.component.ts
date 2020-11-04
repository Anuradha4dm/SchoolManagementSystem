import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

  type = "full-day";
  leaveData; //leave data assign when the form submitted
  leaveTaken = 0;
  leaveAvailable = 41;
  userID = "ST 1";
  name = "Damith Anurada";
  role = "Maths Teacher";
  email = "damith96@gmail.com";
  mobile = "0702174282";
  description;
  date;

  leaveDetails={
    number: 1234,
    date: '20-03-2020',
    type: 'full-day',
    status: 'pending'
  }

  constructor() { }

  ngOnInit(): void {
  }

  //execute when fom submitted
  onLeaveSubmit(formData){
    console.log(formData);
  }
}
