import { Component, OnInit } from '@angular/core';

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
  sideBarItems: SideBarItem[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    {
      path: '/userprofile',
      title: 'Profile',
      icon: 'users_single-02',
      class: '',
    },
    {
      path: '/edit-profile',
      title: 'Edit Profile',
      icon: 'education_agenda-bookmark',
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
      icon: 'gestures_tap-01',
      class: '',
    },
    {
      path: '/addsubjects',
      title: 'Notification',
      icon: 'gestures_tap-01',
      class: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
