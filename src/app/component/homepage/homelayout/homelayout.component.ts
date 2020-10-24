import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initialTab = true;
    this.otherTab =false;
  }

  logoUrl = "assets/img/logo.png";
  initialTab;
  otherTab;

  tabActivate(){
    this.initialTab = false;
    this.otherTab = true;
  }

  //Homepage navigation details here
  navItems = [
    {display:'Home',path:'homepage-home'},
    {display:'Academic Staff',path:'homepage-staff'},
    {display:'Downloads',path:'homepage-downloads'},
    {display:'About',path:'homepage-about'},
  ];

}
