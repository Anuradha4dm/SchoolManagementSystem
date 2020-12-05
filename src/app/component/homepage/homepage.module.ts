import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    HomelayoutComponent,
    HomeComponent,
    LoginComponent,
  ],
  declarations: [
    HomelayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PasswordResetComponent,
  ],
  providers: [],
})
export class HomePageModule {}
