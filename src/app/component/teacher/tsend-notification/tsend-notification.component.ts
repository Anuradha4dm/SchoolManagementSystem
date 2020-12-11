import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-tsend-notification',
  templateUrl: './tsend-notification.component.html',
  styleUrls: ['./tsend-notification.component.css']
})

export class TsendNotificationComponent implements OnInit {
  loggedUserID: string;
  studentList;

  constructor(
    private loginService: UserLogInService,
    private teacherService: TeacherService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.loginService.userAuthData.subscribe((data)=>{
      this.loggedUserID=data.getUserId;
    });

    this.teacherService.getClassStudentList(this.loggedUserID).subscribe((data)=>{
      this.studentList=data;
    });
  }

  //execute when send button click
  onSendClick(value){
    var selectedList=[];

    for(let key in value){
      if(value[key]==true)
        selectedList.push(key);
    }
  
    console.log(selectedList);

    this.teacherService.sendTeacherNotifications(this.loggedUserID,selectedList,value).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("Notification send successfully");
    })
  }
}
