import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewProfileComponent } from './add-new-profile/add-new-profile.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AddNewProfileComponent],
  declarations: [AddNewProfileComponent],
  providers: [],
})
export class AdminModule {}
