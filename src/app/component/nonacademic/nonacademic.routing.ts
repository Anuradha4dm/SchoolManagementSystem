import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ClassHandlerComponent } from './class-handler/class-handler.component';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      { path: 'handle-leave', component: LeavehandleComponent },
      { path: 'add-event', component: AddEventComponent },
      { path: 'send-notification', component: SendNotificationComponent },
      { path: 'class-handler', component: ClassHandlerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAcademicRoutingModule {}