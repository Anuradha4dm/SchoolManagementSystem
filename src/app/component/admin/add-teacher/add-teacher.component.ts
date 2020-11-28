import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  startYear=new Date().getFullYear();
  teacherID;

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      console.log(data);
      this.teacherID = "AC_"+(data.teacherCount+1);
    })
  }

  //Add teacher details to database
  onSubmit(value){
    this.adminService.addNewTeacher(this.teacherID,value).subscribe((data)=>{
      this.alertService.competeAlert("New Teacher has been added successfully...");
    },
    (error)=>{
      console.log(error);
    })
  }
}
