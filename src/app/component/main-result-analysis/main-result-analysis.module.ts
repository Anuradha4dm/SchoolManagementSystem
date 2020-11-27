import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainResultAnalysisRoutingModule } from './main-result-analysis-routing.module';
import { OlAnalysisComponent } from './ol-analysis/ol-analysis.component';
import { AlAnalysisComponent } from './al-analysis/al-analysis.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { ViewOLComponent } from './view-ol/view-ol.component';
import { ViewALComponent } from './view-al/view-al.component';


@NgModule({
  declarations: [OlAnalysisComponent, AlAnalysisComponent, ViewOLComponent, ViewALComponent, ],
  imports: [
    CommonModule,
    MainResultAnalysisRoutingModule,
    NgxPaginationModule,
    ChartsModule,
    FormsModule
  ]
})
export class MainResultAnalysisModule { }
