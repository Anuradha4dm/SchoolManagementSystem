import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationModel } from '../models/notification.modele';
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
    var array: NotificationModel[] = [];
    return this.notificationService.getNotifications().pipe(
      map((data: any) => {
        data.notificationArray.forEach((element) => {
          array.push(
            new NotificationModel(
              element.notificationid,
              element.publisher,
              element.from,
              element.to,
              element.message,
              element.createdAt
            )
          );
        });

        return array;
      })
    );
  }
}
