import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-non-profile',
  templateUrl: './non-profile.component.html',
  styleUrls: ['./non-profile.component.css'],
})
export class NonProfileComponent implements OnInit {
  loggedUserID: string;
  profileData;
  qualifications = [];
  imagepath: string;

  constructor(
    private userLoginService: UserLogInService,
    private nonService: NonAcademicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loggedUserID = data.getUserId;
    });

    this.nonService
      .getNonAcademicProfileData(this.loggedUserID)
      .subscribe((data) => {
        this.profileData = data;
        this.imagepath = 'http://localhost:3000/' + this.profileData.imagepath;
        this.qualifications = this.profileData.qualifications
          .toString()
          .split(',');
      });
  }

  //execute when edit profile click
  onEditClick() {
    this.router.navigate(['user', 'edit-non', this.loggedUserID]);
  }

  onResetPassword() {
    this.router.navigate(['reset-password']);
  }
}
