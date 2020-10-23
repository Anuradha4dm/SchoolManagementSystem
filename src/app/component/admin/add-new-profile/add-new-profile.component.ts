import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DefaultUrlSerializer } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css'],
})
export class AddNewProfileComponent implements OnInit {
  adminLogin: boolean = false;
  studentLogin: boolean = false;
  teacherLoginn: boolean = false;
  nonAcademinLogin: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    this.adminService.addNewProfile(formData.value).subscribe(
      (data) => {
        console.log('success');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
