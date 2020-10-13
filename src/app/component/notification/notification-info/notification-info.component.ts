import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/models/notification.module';

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.css'],
})
export class NotificationInfoComponent implements OnInit {
  @Input('viewNotification') selectedNotification: NotificationModel;

  constructor() {}

  ngOnInit(): void {}
}
