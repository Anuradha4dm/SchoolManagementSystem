import { Component, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-exam-layout',
  templateUrl: './exam-layout.component.html',
  styleUrls: ['./exam-layout.component.css']
})
export class ExamLayoutComponent implements OnInit {
  studentList;
  selection:number = 1;
  selectedYear:number = new Date().getFullYear();
  exam:string = "G.C.E. A/L Examination";

  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    this.onYearChange();
  }

  //Execute when select box change
  onSelectChange(){
    if(this.selection==1 || this.selection==3)
      this.exam = "G.C.E. A/L Examination";
    else
      this.exam = "G.C.E. O/L Examination";
    this.onYearChange();
  }

  onYearChange(){
    if(this.selection==1){
      this.nonService.getRegisteredStudentListOfBothExams(this.selectedYear,true)
        .subscribe((data)=>{
          this.studentList = data;
        });
    }
    if(this.selection==2){
      this.nonService.getRegisteredStudentListOfBothExams(this.selectedYear,false)
      .subscribe((data)=>{
        this.studentList = data;
      });
    }
    console.log(this.studentList);
  }
}
