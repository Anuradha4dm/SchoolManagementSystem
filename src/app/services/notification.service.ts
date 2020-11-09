import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationModel } from '../models/notification.modele';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private httpClient: HttpClient) {}

  getNotifications() {
    return this.httpClient.get<{
      notificationArray: {
        notificationid: string;
        to: number;
        from: string;
        message: string;
        publisher: string;
        createdAt: string;
      }[];
    }>('http://localhost:3000/common/get-post/ST_1');
  }
}
