import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-for-al',
  templateUrl: './register-for-al.component.html',
  styleUrls: ['./register-for-al.component.css']
})
export class RegisterForALComponent implements OnInit {
  @Input() year;
  show:boolean = false;
  page:number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }
}