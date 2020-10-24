import { ConstantPool } from '@angular/compiler';
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

  nextVal: string = '';
  generateid: boolean = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    const form = new FormData();

    console.log(formData.value.userid);

    form.append('grade', formData.value.grade);
    form.append('addressline1', formData.value.addressline1);
    form.append('addressline2', formData.value.addressline2);
    form.append('addressline3', formData.value.addressline3);
    form.append('password', formData.value.userid);
    form.append('age', formData.value.age);
    form.append('birthdate', formData.value.birthdate);
    form.append('classteacher', formData.value.classteacher);
    form.append('city', formData.value.city);
    form.append('mobile', formData.value.mobilenumber);
    form.append('email', formData.value.email);
    form.append('firstname', formData.value.firstname);
    form.append('gender', formData.value.gender);
    form.append('lastname', formData.value.lastname);
    form.append('startyear', formData.value.startyear);
    form.append('surname', formData.value.surname);
    form.append('userid', formData.value.userid);
    form.append('username', formData.value.username);
    form.append('profilepicture', this.selectedFile);

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

  getId() {
    this.adminService.getNewStudentId().subscribe(
      (result) => {
        this.nextVal = result.Id;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.generateid = false;
      }
    );
  }
}
