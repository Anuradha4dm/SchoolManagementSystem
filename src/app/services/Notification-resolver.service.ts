import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationModel } from '../models/notification.module';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class NotificationResolver implements Resolve<NotificationModel[]> {
  constructor(private notificationService: NotificationService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<NotificationModel[]>
    | Promise<NotificationModel[]>
    | NotificationModel[] {
    return this.notificationService.getNotifications();
  }
}
