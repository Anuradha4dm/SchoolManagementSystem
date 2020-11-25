import { KeyValuePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-add-olresults',
  templateUrl: './add-olresults.component.html',
  styleUrls: ['./add-olresults.component.css']
})
export class AddOLresultsComponent implements OnInit {
  @Input() year;
  loggedUser: string;
  show:boolean = false;
  page:number =1;
  results:string[]=[]; //to cantain values from selet boxes

  selectedStudent; //contains details of selected student
  subjectList; //contins selected student's subject data 
  district=0;
  island=0;

  //to contain grade count
  Acount:number =0;
  Bcount:number =0;
  Ccount:number =0;
  Scount:number =0;
  Wcount:number =0;

  //to remove start
  studentList=[
    {index:14100,studentid:"ST_1",name:"Randy Ortan"},
    {index:14110,studentid:"ST_2",name:"Drew Macintyre"},
    {index:14120,studentid:"ST_3",name:"Brock Lesnar"},
    {index:14130,studentid:"ST_4",name:"Triple H"},
    {index:14140,studentid:"ST_5",name:"Jhon Cena"},
    {index:14150,studentid:"ST_6",name:"Boby Lashlie"},
    {index:14160,studentid:"ST_7",name:"Roman Reigns"},
    {index:14170,studentid:"ST_8",name:"Seth Rolins"},
    {index:14180,studentid:"ST_9",name:"Mat Hardy"},
    {index:14180,studentid:"ST_10",name:"Ray Mystereo"},
  ];
  //to remove end

  constructor(
    private userLoginService:UserLogInService,
    private nonService: NonAcademicService
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
        this.subjectList = data.responsedata;
        console.log(this.subjectList);
      });
    this.show = true;
  }

  onSubmit(formData){
    let submitResults=[];

    for (let key in formData) {
      submitResults.push({ mesubjectid: key, meresult: formData[key] });
    }

    this.nonService.addOrdinaryLevelResults(
      this.loggedUser,
      this.selectedStudent.index,
      this.year,
      45,
      6,
      submitResults
    ).subscribe((data)=>{
        console.log(data);
      });
  }

}
