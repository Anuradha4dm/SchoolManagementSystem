import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeacherProfileData } from 'src/app/models/teacher.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-teacher-profile',
  templateUrl: './edit-teacher-profile.component.html',
  styleUrls: ['./edit-teacher-profile.component.css'],
})
export class EditTeacherProfileComponent implements OnInit {
  loggedTeacherID: string;
  teacherProfileData: TeacherProfileData;
  selectedFile: File;
  imageFile:string;
  profilePic;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loggedTeacherID = params['id'];
    });

    this.teacherService.getTeacherProfileData(this.loggedTeacherID)
      .subscribe((data) => {
        this.teacherProfileData = data;
        this.profilePic = 'http://localhost:3000/' + this.teacherProfileData.imagepath;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Execute when profile pic change
  onChange(event) {
    this.selectedFile = event.target.files[0];
    const extention = this.selectedFile.name.split('.')[1];
    this.imageFile = this.loggedTeacherID + '.' + extention;

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  onFormSubmit(value) {
    const form = new FormData();
    form.append('firstname', value.firstname);
    form.append('lastname', value.lastname);
    form.append('surname', value.surname);
    form.append('username', value.username);
    form.append('email', value.email);
    form.append('mobile', value.mobile);
    form.append('age', value.age);


    form.append('addressline1', value.addressline1);
    form.append('addressline2', value.addressline2);
    form.append('addressline3', value.addressline3);
    form.append('city', value.city);


    if (!this.selectedFile) {
      form.append('imagepath', this.teacherProfileData.imagepath);
    } else {
      form.append('imageData', this.selectedFile, this.imageFile);
    }

    console.log(value);
  }

  //execute when reset click
  onResetClick() {
    this.ngOnInit();
  }
}
