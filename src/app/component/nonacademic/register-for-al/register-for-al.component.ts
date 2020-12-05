import { Component, Input, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-for-al',
  templateUrl: './register-for-al.component.html',
  styleUrls: ['./register-for-al.component.css']
})
export class RegisterForALComponent implements OnInit {
  @Input() year;
  show:boolean = false;
  page:number = 1;
  
  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }
}
