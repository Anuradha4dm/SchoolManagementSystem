import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noOfStudent = 4000;
  noOfTeacher = 500;
  noOfClass = 60;
  noOfNonAcademic = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
