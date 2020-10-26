import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificatinHiddenDirective } from 'src/app/directive/notificatin-hidden.directive';
import { NotificationCloseDirective } from 'src/app/directive/notification-close.directive';
import { NotificationInfoComponent } from './notification-info/notification-info.component';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [
    NotificationComponent,
    NotificationInfoComponent,
    NotificatinHiddenDirective,
    NotificationCloseDirective,
  ],
  declarations: [
    NotificationComponent,
    NotificationInfoComponent,
    NotificatinHiddenDirective,
    NotificationCloseDirective,
  ],
  providers: [],
})
export class NotificationModule {}
