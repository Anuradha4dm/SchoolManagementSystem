import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { element } from 'protractor';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';
import html2canvas from 'html2canvas';

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

  printResults(){
    var data=document.getElementById('formContent');

    html2canvas(data).then((canvas)=>{
      var imgWidth = (canvas.width*65)/100;
      var pageHeight = 295;
      var imgHeight = (canvas.height*70)/100;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p','px','a4');
      var position=0;
      pdf.addImage(contentDataURL,'png',18,position,imgWidth,imgHeight);
      pdf.save('test1.pdf');
    });

  }
}
