import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { HttpClientModule } from '@angular/common/http';

import { NonAcademicRoutingModule } from './nonacademic.routing';
import { AddEventComponent } from './add-event/add-event.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { FormsModule } from '@angular/forms';
import { ClassHandlerComponent } from './class-handler/class-handler.component';
import { ClassChangeComponent } from './class-change/class-change.component';
import { AddOLresultsComponent } from './add-olresults/add-olresults.component';
import { AddALresultsComponent } from './add-alresults/add-alresults.component';

@NgModule({
  declarations: [
    LeavehandleComponent,
    AddEventComponent,
    SendNotificationComponent,
    ClassHandlerComponent,
    ClassChangeComponent,
    AddOLresultsComponent,
    AddALresultsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NonAcademicRoutingModule,
    FormsModule,
  ],
  exports: [LeavehandleComponent, FormsModule, HttpClientModule],
})
export class NonacademicModule {}
