import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

import { UserLogInService } from '../../homepage/login/user-login.service';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  studentProfileData: Student = null;
  studentPerformance;

  registeredSubjects: string[] = [];
  isShowRegisteredSubject: boolean = false;

  specialAwards: string[] = ['Winner 1', 'winner 2', 'winner 3'];
  numOfAbsents: number;

  imagePath: string = '';

  absentDates: string[] = [
    new Date().toDateString(),
    new Date().toDateString(),
    new Date().toDateString(),
  ];

  showDate: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService
  ) {}

  ngOnInit(): void {
    this.loginUserService.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });

    this.studentProfileService
      .getStudent(this.loginUserData.getUserId)
      .subscribe(
        (result) => {
          this.studentProfileData = result;

          this.imagePath =
            'http://localhost:3000/' + this.studentProfileData.imagePath;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  toggleShowBtn() {
    this.showDate = !this.showDate;
  }

  onEditProfile() {
    this.router.navigate([
      'user',
      'edit-profile',
      this.loginUserData.getUserId,
    ]);
  }

  viewSubjectClick() {}
}
