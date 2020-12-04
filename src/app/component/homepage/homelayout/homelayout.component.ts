import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomelayoutComponent implements OnInit {
  
  address = "No.6/15,Station road,Katukurunda,Kalutara.";
  phone = ["034-2234561","034-2234562","034-2234563"];
  social = ["myschool@2020gmail.com","myschool@facebook.com"];
  addressArray=[];


  constructor() {}

  ngOnInit(): void {
    this.addressArray=this.address.split(',')
  }


}
