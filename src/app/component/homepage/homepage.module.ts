import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { StaffComponent } from './staff/staff.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    StaffComponent,
    HomelayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DownloadsComponent,
  ],
  declarations: [
    StaffComponent,
    HomelayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DownloadsComponent,
    PasswordResetComponent,
  ],
  providers: [],
})
export class HomePageModule {}
