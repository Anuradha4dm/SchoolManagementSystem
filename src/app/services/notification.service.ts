import { NotificationModel } from '../models/notification.module';

export class NotificationService {
  private notifications: NotificationModel[] = [
    new NotificationModel(
      'damith',
      'nadeeka',
      'Serious Problem 1',
      'You are my hotti',
      new Date().toUTCString()
    ),
    new NotificationModel(
      'damith',
      'nadeeka',
      'Serious Problem 2',
      'Not Inesent ,Care About me,best person i have ever seen ',
      new Date().toUTCString()
    ),
    new NotificationModel(
      'damith',
      'nadeeka',
      'Serious Problem 2',
      "I Can't live without you",
      new Date().toUTCString()
    ),
  ];

  getNotifications() {
    return this.notifications;
  }
}
