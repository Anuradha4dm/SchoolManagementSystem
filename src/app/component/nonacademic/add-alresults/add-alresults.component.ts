import { Component, Input, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-add-alresults',
  templateUrl: './add-alresults.component.html',
  styleUrls: ['./add-alresults.component.css']
})
export class AddALresultsComponent implements OnInit {
  @Input() year;
  @Input() studentList;
  filteredList;
  loggedUser:string;
  selectedStudent; //contains details of selected student
  selectedName; //contain selcted student name
  stream;

  show:boolean = false;
  page:number = 1; //for pagination
  results:string[]=[];

  subjectList; //contins selected student's subject data 
  district=0;
  island=0;
  zscore=0;

  //to contain grade count
  Acount:number = 0;
  Bcount:number = 0;
  Ccount:number = 0;
  Scount:number = 0;
  Wcount:number = 0;

  constructor(
    private userLoginService: UserLogInService,
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
    this.results[i]=value;

    this.Acount=this.results.filter((data)=>data=='A').length;
    this.Bcount=this.results.filter((data)=>data=='B').length;
    this.Ccount=this.results.filter((data)=>data=='C').length;
    this.Scount=this.results.filter((data)=>data=='S').length;
    this.Wcount=this.results.filter((data)=>data=='W').length;
  }

  //parse selected Student data
  onRowClick(student){
    this.selectedStudent=student;
    this.show = true;

    this.nonService.getSubjectDataForResultAddition(this.selectedStudent.studentid,this.year)
      .subscribe((data)=>{
        this.subjectList = data.subjects;
        this.selectedName = data.studentname;
      });
  }

  onSubmit(formData){
   let submitResults=[];

    for (let key in formData) {
      submitResults.push({ mesubjectid: key, meresult: formData[key] });
    }
    console.log(formData)
    
    this.nonService.addAdvanceLevelResults(
      this.loggedUser,
      this.selectedStudent.indexnumber,
      this.year,
      this.island,
      this.district,
      this.selectedStudent.stream,
      this.zscore,
      submitResults
    ).subscribe((data)=>{
        if(data.resultaddtion)
          this.alertService.competeAlert("Results added successfully...");
        else
          this.alertService.competeAlert("Results cannot be added, try again later...");
    });
  }

  onStreamFilter(){
    this.show=false;
console.log(this.studentList)
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
