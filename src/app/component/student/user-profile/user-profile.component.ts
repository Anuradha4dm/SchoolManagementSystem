import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  specialAwards: string[] = ['Winner 1', 'winner 2', 'winner 3'];
  numOfAbsents: number;

  absentDates: string[] = [
    new Date().toDateString(),
    new Date().toDateString(),
    new Date().toDateString(),
  ];

  showDate: boolean = false;

  constructor() {
    this.numOfAbsents = this.absentDates.length;
  }

  ngOnInit(): void {}

  toggleShowBtn() {
    this.showDate = !this.showDate;
  }
}
