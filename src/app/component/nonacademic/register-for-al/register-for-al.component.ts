import { Component, Input, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
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
  subjectList; //contain selected student subject list
  index; //selected students indexnumber
  verified:boolean=true;
  stream;
  filteredList;

  constructor(
    private nonService: NonAcademicService,
    private alertService: AlertMessageService) {}

  ngOnInit(): void {
  }

  onRowClick(student) {
    this.selectedStudent = student;

    this.nonService.getStudentSubjectListForRegistration(this.selectedStudent._id,"al").subscribe((data)=>{
      console.log(data.subjects);
      this.subjectList=data.subjects;
    });

    this.show = true;
  }

  verifyIndex(text){
    if(text==this.index)
      this.verified=true;
    else
      this.verified=false;
  }

  onStreamFilter(){
    this.show=false;

    if(this.stream!="ALL"){
      this.filteredList=this.studentList.filter((student)=>{
        return student.stream==this.stream;
      });
    }
    else{
      this.filteredList=this.studentList;
    }

  }

  onSubmit(){
    var list=[];

    this.subjectList.forEach(element => {
      list.push(element.mesubjectname);  
    });

    this.nonService.registerStudentsForExams(
      this.year,
      this.index,
      this.selectedStudent._id,
      1,
      true,
      this.selectedStudent.class.grade,
      this.selectedStudent.stream,
      list
    )
    .subscribe((data) => {
      if(!data)
        this.alertService.errorAlert("You Have already registered this student...");
      else
        this.alertService.competeAlert("Student registered successfully...");
    });
  }
}
