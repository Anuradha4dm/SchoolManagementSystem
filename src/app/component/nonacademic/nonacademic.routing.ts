import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';

const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [{ path: 'handle-leave', component: LeavehandleComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAcademicRoutingModule {}
