import { NotificationModel } from '../models/notification.module';

export class NotificationService {
  private notifications: NotificationModel[] = [
    new NotificationModel(
      '123',
      'user1',
      'user2',
      'Serious Problem 2',
      'This is the message in the notification',
      new Date().toUTCString()
    ),
    new NotificationModel(
      '123',
      'user3',
      'user4',
      'Serious Problem 4',
      'This is the message2 in the notification',
      new Date().toUTCString()
    ),
  ];

  getNotifications() {
    return this.notifications;
  }
}
