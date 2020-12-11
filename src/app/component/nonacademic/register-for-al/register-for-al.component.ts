import { Component, Input, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-for-al',
  templateUrl: './register-for-al.component.html',
  styleUrls: ['./register-for-al.component.css'],
})
export class RegisterForALComponent implements OnInit {
  @Input() year;
  show: boolean = false;
  page: number = 1;
  @Input() studentList;
  selectedStudent; //contain selected student data
  index; //selected students indexnumber
  verified:boolean=true;
  stream;
  filteredList;

  constructor(private nonService: NonAcademicService) {}

  ngOnInit(): void {
  }

  onRowClick(student) {
    this.selectedStudent = student;
    this.show = true;
  }

  verifyIndex(text){
    if(text==this.index)
      this.verified=true;
    else
      this.verified=false;
  }

  onStreamFilter(){
    if(this.stream!="ALL"){
      this.filteredList=this.studentList.filter((student)=>{
        return student.stream==this.stream;
      });
    }
    else{
      this.filteredList=this.studentList;
    }
  }
}
