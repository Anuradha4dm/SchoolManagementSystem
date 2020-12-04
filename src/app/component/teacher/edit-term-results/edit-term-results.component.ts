import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-term-results',
  templateUrl: './edit-term-results.component.html',
  styleUrls: ['./edit-term-results.component.css']
})
export class EditTermResultsComponent implements OnInit {
  loggedUserID: string;
  classID: string;
  year: number = new Date().getFullYear();
  selectedTerm: number=1;
  selectedID: string; //to contain selected student id
  avarageData=[]; //contain students avarage and position data of the term
  studentPastResults;

  page: number; //for pagination current page
  show:boolean = false;



  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loggedUserID = userData.getUserId;
    });

    this.teacherService.getTeacherProfileData(this.loggedUserID)
      .subscribe((data)=>{
        this.classID = data.class;
        this.onTermChange();
      }); 

  }

  //Execute when select box change,gives students avarage data
  onTermChange(){
    this.show = false;
    this.teacherService.postGetAverageDataWithStudent(this.year,this.selectedTerm,this.classID)
      .subscribe((data)=>{
        this.avarageData = data.avarageData.sort((a,b)=>{return b.average-a.average});
        console.log(this.avarageData)
      });
  }

  //Execute when click one row
  onRowClick(studentid){
    this.selectedID = studentid;

    this.teacherService.getStudentPastResultForEdit(this.year,this.selectedTerm,studentid)
      .subscribe((data)=>{
        this.studentPastResults = data;
      });
    this.show=true;
  }

  updateResults(formData){
    let results = [];
    
    for(let key in formData){
      results.push({subjectid: Number.parseInt(key), mark: formData[key] as number});
    }
    
    this.teacherService.updateStudentResultAfterEdit(
      this.year,
      this.selectedTerm,
      this.selectedID,
      results)
      .subscribe((data)=>{
        this.alertService.competeAlert("Results updated successfully..");
      },
      (error)=>{
        this.alertService.competeAlert("Results couldn't updated..");
      },
      ()=>{
        this.ngOnInit();
      });
  }

}
