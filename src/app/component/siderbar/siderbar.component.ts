import { Component, OnInit } from '@angular/core';
import { UserLogInService } from '../homepage/login/user-login.service';

declare interface SideBarItem {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
})
export class SiderbarComponent implements OnInit {
  userRoll: string;

  sideBarItems: SideBarItem[] = [];

  constructor(private userLogInService: UserLogInService) {}

  ngOnInit(): void {
    this.userLogInService.userAuthData.subscribe((userData) => {
      this.userRoll = userData.getLoginAs;
    });
    if (this.userRoll == 'student') {
      this.sideBarItems = [
        {
          path: '/user/dashboard',
          title: 'Dashboard',
          icon: 'design_app',
          class: '',
        },
        {
          path: '/user/userprofile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/notification',
          title: 'Notification',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/view-result',
          title: 'VIEW RESULT',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/addsubjects',
          title: 'Add Subjects',
          icon: 'files_single-copy-04',
          class: '',
        },
        {
          path: '/user/viewsubjects',
          title: 'View Subjects',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/exams',
          title: 'EXAMS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/events',
          title: 'EVENTS',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }
    if (this.userRoll === 'teacher') {
      this.sideBarItems = [
        {
          path: '/user/dashboard',
          title: 'Dashboard',
          icon: 'design_app',
          class: '',
        },
        {
          path: '/user/userprofile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/student-list',
          title: 'Student List',
          icon: 'design_bullet-list-67',
          class: '',
        },
        {
          path: '/user/mark-attendence',
          title: 'Student Attendence',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/notification',
          title: 'Notification',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/leave-request',
          title: 'Request Leave',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/exams',
          title: 'EXAMS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/chat',
          title: 'CHAT',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/events',
          title: 'EVENTS',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }
  }
}
