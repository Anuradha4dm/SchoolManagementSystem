import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { UserLogInService } from '../../homepage/login/user-login.service';
import { StudentListService } from '../student-list.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
})
export class StudentAttendenceComponent implements OnInit {
  teacherID:string;
  date: Date = new Date();
  grade: string;
  absent: number = 0;
  studentList:{
    _id: string;
    firstname: string;
    lastname: string;
  }[];

  otherClass:boolean = false;
  enterClicked:boolean = false;
  otherID:string;
  error:boolean = true;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private studentListService: StudentListService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.teacherID=userData.getUserId;
    });

    this.teacherService.getStudentListForAddResult(this.teacherID)
    .subscribe((data)=>{
      this.grade = data.grade;
      this.studentList = data.studentListData;
    });
  }

  //execute when change the slider state
  onSliderChange(event){
    if(event.checked)
      this.absent-=1;
    else
      this.absent+=1;
  }

  //execute when enter button click
  onEnterClick(value){
    this.otherID=value.toUpperCase();
    this.teacherService.getStudentListForAddResult(this.otherID)
    .subscribe((data)=>{
        this.grade=data.grade;
        this.studentList=data.studentListData;
        this.teacherID = this.otherID;
        this.error = false; 
    });
    this.enterClicked = true;
  }

  onCancelClick(id,firstname){
    this.ngOnInit();
    //this.test1=this.studentList.find((res)=>{return res._id.match(id) && res.firstname.match(firstname)})
  }

  //execute when form submit  
  onAttendanceSubmit(formValue){
    console.log(formValue);
  }

}
