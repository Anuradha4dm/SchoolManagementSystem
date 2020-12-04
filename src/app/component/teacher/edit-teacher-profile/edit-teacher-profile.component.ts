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
    private teacherService: TeacherService,
    private alertMessage: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loggedTeacherID = params['id'];
    });

    this.teacherService.getTeacherProfileData(this.loggedTeacherID)
      .subscribe((data) => {
        this.teacherProfileData = data;
        this.profilePic = 'http://localhost:3000/' + this.teacherProfileData.imagepath;
        console.log(data)
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

  onFormSubmit(formData) {
    const form = new FormData();

    form.append('teacherid',this.loggedTeacherID);
    form.append('firstname', formData.value.firstname);
    form.append('lastname', formData.value.lastname);
    form.append('surname', formData.value.surname);
    form.append('username', formData.value.username);
    form.append('email', formData.value.email);
    form.append('mobile', formData.value.mobile);
    form.append('age', formData.value.age);
    form.append('addressline1', formData.value.addressline1);
    form.append('addressline2', formData.value.addressline2);
    form.append('addressline3', formData.value.addressline3);
    form.append('city', formData.value.city);
    form.append('qualifications',formData.value.qualifications);

    if (!this.selectedFile) {
      form.append('imagepath', this.teacherProfileData.imagepath);
    } else {
      form.append('imageData', this.selectedFile, this.imageFile);
    }

    this.teacherService.updateTeacherProfile(form)
      .subscribe(
      (data)=>{},
      (error)=>{console.log(error)},
      ()=>{
        this.alertMessage.competeAlert("You have updated profile successfully");
      });

  }

  //execute when reset click
  onResetClick() {
    this.ngOnInit();
  }
}
