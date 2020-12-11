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
      console.log(this.userRoll);
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
          path: '/user/view-participation',
          title: 'PARTICIPATION',
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
          path: '/user/payment',
          title: 'Payment',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }

    if (this.userRoll === 'teacher') {
      this.sideBarItems = [
        {
          path: '/user/teacher-profile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/mark-attendence',
          title: 'Student Attendence',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/teacher-notification',
          title: 'Notification',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/add-student-result',
          title: 'Add Result',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/view-student-result',
          title: 'View Result',
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
          path: '/user/teacher-send-messages',
          title: 'Send Messages',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/view-ol-results',
          title: 'O/L Results',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/view-al-results',
          title: 'A/L Results',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }

    if (this.userRoll === 'nonacademic') {
      this.sideBarItems = [
        {
          path: '/user/userprofile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        //to remove start
        {
          path: '/user/add-new-class',
          title: 'Create Class',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/add-new-teacher',
          title: 'Add Teacher',
          icon: 'users_single-02',
          class: '',
        },
        //to remove end
        {
          path: '/user/handle-leave',
          title: 'HANDLE LEAVES',
          icon: 'users_single-02',
          class: '',
        },

        {
          path: '/user/send-notification',
          title: 'SEND NOTIFICATION',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/class-handler',
          title: 'HANDLE CLASS',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/teacher-handler',
          title: 'Teacher Handler',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/student-class-change',
          title: 'Class Change',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/main-exam-layout',
          title: 'Main Exams',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/ol-analysis',
          title: 'O/L Analysis',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/al-analysis',
          title: 'A/L Analysis',
          icon: 'gestures_tap-01',
          class: '',
        },

        {
          path: '/user/register-advance-level-stream',
          title: 'A/L Registration',
          icon: 'gestures_tap-01',
          class: '',
        },
      ];
    }
  }

  logout() {
    this.userLogInService.logout();
  }
}
