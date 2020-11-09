import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { NotificationModel } from 'src/app/models/notification.modele';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: NotificationModel[] = [];
  selectedNotification: NotificationModel;

  isNotificationAvailable: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.notifications = data['notifications'];
      console.log(data['notifications']);
    });
    this.isNotificationAvailable = this.notifications.length > 0;
  }

  onSelectNotification(notification) {
    this.selectedNotification = notification;
  }

  removeNotification() {
    this.selectedNotification = null;
  }
}
