import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavehandleComponent } from './leavehandle/leavehandle.component';
import { HttpClientModule } from '@angular/common/http';

import { NonAcademicRoutingModule } from './nonacademic.routing';

@NgModule({
  declarations: [LeavehandleComponent],
  imports: [CommonModule, HttpClientModule, NonAcademicRoutingModule],
  exports: [LeavehandleComponent],
})
export class NonacademicModule {}
