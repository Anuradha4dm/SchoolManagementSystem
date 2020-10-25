import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css'],
})
export class AddNewProfileComponent implements OnInit {
  profilePic: string = '../../../../assets/img/profile.png';
  selectedFile: File = null;
  adminLogin: boolean = false;
  studentLogin: boolean = false;
  teacherLoginn: boolean = false;
  nonAcademinLogin: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    const form = new FormData();
    form.set('grade', formData.value.grade);
    form.set('addressline1', formData.value.addressline1);
    form.set('addressline2', formData.value.addressline2);
    form.set('addressline3', formData.value.addressline3);
    form.set('age', formData.value.age);
    form.set('birthdate', formData.value.birthdate);
    form.set('classteacher', formData.value.classteacher);
    form.set('email', formData.value.email);
    form.set('firstname', formData.value.firstname);
    form.set('gender', formData.value.gender);
    form.set('lastname', formData.value.lastname);
    form.set('startyear', formData.value.startyear);
    form.set('surname', formData.value.surname);
    form.set('userid', formData.value.userid);
    form.set('username', formData.value.username);
    form.set('profilepicture', this.selectedFile);

    this.adminService.postNewStudentData(form).subscribe(
      (result) => {
        console.log('data submitted');
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  onChange(event) {
    this.selectedFile = <File>event.target.files[0];
  }
}
