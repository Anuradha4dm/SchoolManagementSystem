import { NotificationModel } from '../models/notification.module';

export class NotificationService {
  private notifications: NotificationModel[] = [
    new NotificationModel(
      'user1',
      'user2',
      'Serious Problem 2',
      '',
      new Date().toUTCString()
    ),
  ];

  getNotifications() {
    return this.notifications;
  }
}
