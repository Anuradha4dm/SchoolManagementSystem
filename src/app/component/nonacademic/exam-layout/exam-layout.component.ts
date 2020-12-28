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
  selectedYear:number = new Date().getFullYear()-1;
  exam:string = "G.C.E. O/L Examination";

  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  //Execute when select box change
  onSelectChange(){
    if(this.selection==1 || this.selection==3)
      this.exam = "G.C.E. O/L Examination";
    else
      this.exam = "G.C.E. A/L Examination";
    this.getStudentList();
  }

  //return student list of the releted exam of year
  getStudentList(){
   
    if(this.selection==1){
      this.studentList=[];

      this.nonService.getOrdinaryLevelStudentListForRegister().subscribe((data)=>{
        this.studentList = data.studentList;
      });
    }

    if(this.selection==2){
      this.studentList=[];
      
      this.nonService.getAdvanceLevelStudentListForRegister().subscribe((data)=>{
        this.studentList = data;
        console.log(this.studentList)
      });
    }

    if(this.selection==3){
      this.studentList=[];
      
      this.nonService.getRegisteredStudentListOfBothExams(this.selectedYear,false)
      .subscribe((data)=>{
        this.studentList = data;
      });
    }

    if(this.selection==4){
      this.studentList=[];
      
      this.nonService.getRegisteredStudentListOfBothExams(this.selectedYear,true)
        .subscribe((data)=>{
          this.studentList = data;
        });
    }
  }
}
