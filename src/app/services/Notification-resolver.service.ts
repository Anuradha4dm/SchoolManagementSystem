import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { UserLogInService } from '../component/homepage/login/user-login.service';
import { NotificationModel } from '../models/notification.modele';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class NotificationResolver implements Resolve<NotificationModel[]> {
  constructor(
    private notificationService: NotificationService,
    private userLoginService: UserLogInService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<NotificationModel[]>
    | Promise<NotificationModel[]>
    | NotificationModel[] {
    var array: NotificationModel[] = [];

    return this.userLoginService.userAuthData
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.notificationService.getNotifications(user.getUserId);
        })
      )
      .pipe(
        map((data: any) => {
          data.notificationArray.forEach((element) => {
            array.push(
              new NotificationModel(
                element.notificationid,
                element.publisher,
                element.from,
                element.to,
                element.title,
                element.message,
                element.createdAt,
                element.attachmentpath
              )
            );
          });

          return array;
        })
      );
  }
}
