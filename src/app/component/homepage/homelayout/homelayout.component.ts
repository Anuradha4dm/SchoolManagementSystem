import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomelayoutComponent implements OnInit {
  logoUrl = 'assets/img/logo.png';
  tabName="Home";
  tabs = [{name:'Home'},{name:'Academic Staff'},{name:'Downloads'},{name:'About'}];

  constructor() {}

  ngOnInit(): void {
  }

  tabActivate(tabName) {
    this.tabName = tabName;
  }

}
