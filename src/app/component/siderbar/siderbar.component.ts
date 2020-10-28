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
  userRoll: string = 'student';

  sideBarItems: SideBarItem[] = [];
  // { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
  // {
  //   path: '/userprofile',
  //   title: 'Profile',
  //   icon: 'users_single-02',
  //   class: '',
  // },

  // {
  //   path: '/student-list',
  //   title: 'Student List',
  //   icon: 'design_bullet-list-67',
  //   class: '',
  // },
  // {
  //   path: '/mark-attendence',
  //   title: 'Student Attendence',
  //   icon: 'gestures_tap-01',
  //   class: '',
  // },
  // {
  //   path: '/notification',
  //   title: 'Notification',
  //   icon: 'education_agenda-bookmark',
  //   class: '',
  // },
  // {
  //   path: '/addsubjects',
  //   title: 'Add Subjects',
  //   icon: 'files_single-copy-04',
  //   class: '',
  // },
  // {
  //   path: '/add-new-profile',
  //   title: 'New Profile',
  //   icon: 'files_single-copy-04',
  //   class: '',
  // },

  constructor(private userLogInService: UserLogInService) {}

  ngOnInit(): void {
    if (this.userRoll === 'student') {
      this.sideBarItems = [
        {
          path: '/dashboard',
          title: 'Dashboard',
          icon: 'design_app',
          class: '',
        },
        {
          path: '/userprofile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/notification',
          title: 'Notification',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/view-result',
          title: 'VIEW RESULT',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/addsubjects',
          title: 'Add Subjects',
          icon: 'files_single-copy-04',
          class: '',
        },
        {
          path: '/exams',
          title: 'EXAMS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/chat',
          title: 'CHAT',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/events',
          title: 'EVENTS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/payments',
          title: 'PAYMENTS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/madmax-tprofile',
          title: 'madmax-tprofile',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/madmax-leave',
          title: 'madax-leave',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }

    if (this.userRoll === 'teacher') {
      this.sideBarItems = [
        {
          path: '/dashboard',
          title: 'Dashboard',
          icon: 'design_app',
          class: '',
        },
        {
          path: '/userprofile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },

        {
          path: '/student-list',
          title: 'Student List',
          icon: 'design_bullet-list-67',
          class: '',
        },
        {
          path: '/mark-attendence',
          title: 'Student Attendence',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/notification',
          title: 'Notification',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/leave-request',
          title: 'Request Leave',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/exams',
          title: 'EXAMS',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/chat',
          title: 'CHAT',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/events',
          title: 'EVENTS',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }
  }
}
