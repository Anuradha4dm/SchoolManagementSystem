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
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/view-participation',
          title: 'PARTICIPATION',
          icon: 'media-2_sound-wave',
          class: '',
        },

        {
          path: '/user/view-result',
          title: 'VIEW RESULT',
          icon: 'education_paper',
          class: '',
        },
        {
          path: '/user/addsubjects',
          title: 'Add Subjects',
          icon: 'education_agenda-bookmark',
          class: '',
        },
        {
          path: '/user/viewsubjects',
          title: 'View Subjects',
          icon: 'files_single-copy-04',
          class: '',
        },
      ];
    }

    if (this.userRoll === 'teacher') {
      this.sideBarItems = [
        {
          path: '/user/teacher-dashboard',
          title: 'Dashboard',
          icon: 'design_app',
          class: '',
        },
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
          icon: 'ui-1_bell-53',
          class: '',
        },
        {
          path: '/user/add-student-result',
          title: 'Add Result',
          icon: 'files_single-copy-04',
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
          icon: 'ui-1_calendar-60',
          class: '',
        },
        {
          path: '/user/teacher-send-messages',
          title: 'Send Messages',
          icon: 'ui-1_email-85',
          class: '',
        },
        {
          path: '/user/view-ol-results',
          title: 'O/L Results',
          icon: 'files_paper',
          class: '',
        },
        {
          path: '/user/view-al-results',
          title: 'A/L Results',
          icon: 'files_paper',
          class: '',
        },
      ];
    }
    
    if (this.userRoll === 'admin') {
      this.sideBarItems = [
        {
          path: '/user/profile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/add-new-class',
          title: 'Create Class',
          icon: 'objects_globe',
          class: '',
        },
        {
          path: '/user/add-new-teacher',
          title: 'Add Teacher',
          icon: 'education_hat',
          class: '',
        },
        {
          path: '/user/add-non-academic',
          title: 'Add Nonacademic',
          icon: 'users_circle-08',
          class: '',
        },
        {
          path: '/user/new-student',
          title: 'New Student',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/ol-analysis',
          title: 'O/L Analysis',
          icon: 'business_chart-bar-32',
          class: '',
        },
        {
          path: '/user/al-analysis',
          title: 'A/L Analysis',
          icon: 'business_chart-pie-36',
          class: '',
        },
        {
          path: '/user/send-notification',
          title: 'SEND NOTIFICATION',
          icon: 'ui-1_email-85',
          class: '',
        },
      
      ]
    }

    if (this.userRoll === 'leave_handler') {
      this.sideBarItems = [
        {
          path: '/user/profile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/handle-leave',
          title: 'HANDLE LEAVES',
          icon: 'files_single-copy-04',
          class: '',
        },
        {
          path: '/user/send-notification',
          title: 'SEND NOTIFICATION',
          icon: 'ui-1_email-85',
          class: '',
        },
      ];
    }

    
    if (this.userRoll === 'class_handler') {
      this.sideBarItems = [
        {
          path: '/user/profile',
          title: 'Profile',
          icon: 'users_single-02',
          class: '',
        },
        {
          path: '/user/add-new-class',
          title: 'Create Class',
          icon: 'objects_globe',
          class: '',
        },
        {
          path: '/user/class-handler',
          title: 'HANDLE CLASS',
          icon: 'shopping_shop',
          class: '',
        },
        {
          path: '/user/student-class-change',
          title: 'Class Change',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/send-notification',
          title: 'SEND NOTIFICATION',
          icon: 'ui-1_email-85',
          class: '',
        },
      ]
    }

    if (this.userRoll === 'other') {
      this.sideBarItems = [
        {
          path: '/user/profile',
          title: 'Profile',
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
          path: '/user/add-timetable',
          title: 'Add Timetables',
          icon: 'ui-1_calendar-60',
          class: '',
        },
        {
          path: '/user/register-advance-level-stream',
          title: 'A/L Registration',
          icon: 'gestures_tap-01',
          class: '',
        },
        {
          path: '/user/main-exam-layout',
          title: 'Main Exams',
          icon: 'education_paper',
          class: '',
        },
        {
          path: '/user/send-notification',
          title: 'SEND NOTIFICATION',
          icon: 'ui-1_email-85',
          class: '',
        },
      ]
    }

  }

  logout() {
    this.userLogInService.logout();
  }
}
