import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  teacherPro:any;
  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeacherProfileData("AC_1").subscribe((data)=>{
      this.teacherPro = data;
    },error=>{
      console.log(error)
    });
  }

  onClick(){
    console.log(this.teacherPro);
  }
}
