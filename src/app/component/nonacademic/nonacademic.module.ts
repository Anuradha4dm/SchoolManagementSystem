import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { HttpClientModule } from '@angular/common/http';

import { NonAcademicRoutingModule } from './nonacademic.routing';
import { AddEventComponent } from './add-event/add-event.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LeavehandleComponent,
    AddEventComponent,
    SendNotificationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NonAcademicRoutingModule,
    FormsModule,
  ],
  exports: [LeavehandleComponent],
})
export class NonacademicModule {}
