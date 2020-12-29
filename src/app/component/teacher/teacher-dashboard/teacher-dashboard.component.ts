import { Component, OnInit } from '@angular/core';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  loggedTeacherID: string;
  attendanceData:any[];
  percentage;
  filteredData:any[];

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loggedTeacherID = data.getUserId;
    });

    this.teacherService.getTeacherAttendance(this.loggedTeacherID).subscribe((data)=>{
      this.attendanceData = this.filteredData=data;
      this.calculateAverage();
    });

  }

  //execute when buttons press
  filterDates(status){
    this.filteredData=[];

    if(status=='present'){
      this.filteredData=this.attendanceData.filter((data)=>{
        return data.present==true
      });
    }
    else if(status=='absent'){
      this.filteredData=this.attendanceData.filter((data)=>{
        return data.present==false
      });
    }
    else{
      this.filteredData=this.attendanceData
    }
  }

  //return percentage of present of this month
  calculateAverage(){
    this.percentage=this.attendanceData.filter((data)=>{
      return data.present==true
    }).length*100/this.attendanceData.length;
console.log(this.percentage)
  }
}
