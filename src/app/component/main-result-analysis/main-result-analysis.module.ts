import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainResultAnalysisRoutingModule } from './main-result-analysis-routing.module';
import { OlAnalysisComponent } from './ol-analysis/ol-analysis.component';
import { AlAnalysisComponent } from './al-analysis/al-analysis.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [OlAnalysisComponent, AlAnalysisComponent],
  imports: [
    CommonModule,
    MainResultAnalysisRoutingModule,
    NgxPaginationModule,
    ChartsModule
  ]
})
export class MainResultAnalysisModule { }
