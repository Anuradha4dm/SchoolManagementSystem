import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    StaffComponent,
    HomelayoutComponent,
    HomeComponent,
    AboutComponent,

    DownloadsComponent,
  ],
  declarations: [
    StaffComponent,
    HomelayoutComponent,
    HomeComponent,
    AboutComponent,
    DownloadsComponent,
  ],
  providers: [],
})
export class HomePageModule {}
