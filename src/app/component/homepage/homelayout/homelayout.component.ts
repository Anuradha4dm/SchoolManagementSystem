import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomelayoutComponent implements OnInit {
  schoolAddress = "No.6/15,Station road,Katukurunda,Kalutara.";
  schoolPhone = "034-2234561";
  schoolMail = "mySchool@gmail2020.com";
  
  tabName="Home";
  tabs = [{name:'Home'},{name:'Academic Staff'},{name:'Downloads'},{name:'About'}];

  constructor() {}

  ngOnInit(): void {
  }

  tabActivate(tabName) {
    this.tabName = tabName;
  }

}
