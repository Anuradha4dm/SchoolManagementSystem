import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherProfileData } from 'src/app/models/teacher.model';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})
export class TeacherProfileComponent implements OnInit {
  loggedTeacherID: string;
  teacherProfileData: TeacherProfileData;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loggedTeacherID = data.getUserId;
    });

    this.teacherService.getTeacherProfileData(this.loggedTeacherID)
      .subscribe((data) => {
        this.teacherProfileData = data;
      });
  }

  //execute when edit profile click
  onEditClick() {
    this.router.navigate(['user', 'edit-teacher', this.loggedTeacherID]);
  }
}
