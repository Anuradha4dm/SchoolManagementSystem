import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { NotificationModel } from 'src/app/models/notification.module';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: NotificationModel[] = [];
  selectedNotification: NotificationModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.notifications = data['notifications'];
    });
  }

  onSelectNotification(notification) {
    this.selectedNotification = notification;
  }
}
