import { Component, OnInit } from '@angular/core';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { ClassStudentList, ITermResults } from 'src/app/models/teacher.model';
import { idText } from 'typescript';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-term-results',
  templateUrl: './edit-term-results.component.html',
  styleUrls: ['./edit-term-results.component.css']
})
export class EditTermResultsComponent implements OnInit {
  loginUserData: LogInUserModel;
  studentPastResults: any[];

  classStudentList: ClassStudentList;
  studentsResult;
  res;
  year: number = new Date().getFullYear();
  term: number = 1;

  show:boolean = false;
  selectedTerm: number;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });

    this.teacherService.getClassStudentList(this.loginUserData.getUserId)
      .subscribe((data)=>{
        this.classStudentList = data;
      });

    this.teacherService.getStudentPastResultForEdit(2019,1,"ST_1")
      .subscribe((data)=>{
        console.log(data);
      });

    this.selectedTerm=1; 

    //to remove end
  }

  onTermChange(){
    this.teacherService.getStudentPastResultForEdit(2020,this.term,"ST_2")
      .subscribe((data)=>{
        this.studentsResult = data;
        console.log(this.studentsResult);
      });
  }

  //Execute when click one row
  onRowClick(studentid){
    this.teacherService.getStudentPastResultForEdit(this.year-1,this.term,studentid)
      .subscribe((data)=>{
        this.studentPastResults = data.result}
      );
    this.show=true;
  }

  onUpdateResultsClick(formvalue){
    this.res=this.studentPastResults.map(formvalue);
    this.teacherService.updateStudentResultAfterEdit(this.year,this.term,"ST_1",this.res)
      .subscribe((data)=>{
      });
  }

}
