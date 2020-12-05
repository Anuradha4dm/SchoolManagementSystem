import { KeyValuePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-add-olresults',
  templateUrl: './add-olresults.component.html',
  styleUrls: ['./add-olresults.component.css']
})
export class AddOLresultsComponent implements OnInit {
  @Input() year;
  @Input() studentList;
  selectedStudent; //contains details of selected student
  selectedName; //contain selected stdent name

  loggedUser: string;
  show:boolean = false;
  page:number =1;
  results:string[]=[]; //to cantain values from selet boxes
  subjectList; //contins selected student's subject data 
 
  district=0;
  island=0;

  //to contain grade count
  Acount:number =0;
  Bcount:number =0;
  Ccount:number =0;
  Scount:number =0;
  Wcount:number =0;

  constructor(
    private userLoginService:UserLogInService,
    private nonService: NonAcademicService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loggedUser = userData.getUserId;
    });
  }

  //Execute when result change
  onChange(value,i){
    this.Acount=this.results.filter((data)=>data=='A').length;
    this.Bcount=this.results.filter((data)=>data=='B').length;
    this.Ccount=this.results.filter((data)=>data=='C').length;
    this.Scount=this.results.filter((data)=>data=='S').length;
    this.Wcount=this.results.filter((data)=>data=='W').length;
  }

  //Pass the selected student data and get subject details
  onRowClick(student){
    this.selectedStudent = student;

    this.nonService.getSubjectDataForResultAddition(this.selectedStudent.studentid,this.year)
      .subscribe((data)=>{
        this.subjectList = data.subjects;
        this.selectedName = data.studentname;
      });
    this.show = true;
  }

  onSubmit(formData){
    let submitResults=[];

    for (let key in formData) {
      submitResults.push({ mesubjectid: key, meresult: formData[key].toString() });
    }

    this.nonService.addOrdinaryLevelResults(
      this.loggedUser,
      this.selectedStudent.indexnumber,
      this.year,
      this.island,
      this.district,
      submitResults
    ).subscribe((data)=>{
        if(data.resultaddtion)
          this.alertService.competeAlert("Results added successfully...");
    },(error)=>{
      this.alertService.competeAlert("Results cannot be added, try again later...");      
    });
  }

}
