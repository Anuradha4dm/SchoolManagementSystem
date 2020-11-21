import { Component, Input, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-for-ol',
  templateUrl: './register-for-ol.component.html',
  styleUrls: ['./register-for-ol.component.css']
})
export class RegisterForOLComponent implements OnInit {
  @Input() year;
  show:boolean = false;
  page:number = 1;

  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    this.nonService.addOrdinaryLevelResults("NAC_1",176524,2020,23,245,[{mesubjectid:3,meresult:"A"}]).subscribe((data)=>{
      console.log(data);
    });
  }

  onRowClick(){
    this.show = true;
  }

}
