import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-for-ol',
  templateUrl: './register-for-ol.component.html',
  styleUrls: ['./register-for-ol.component.css']
})
export class RegisterForOLComponent implements OnInit {
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
