import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  imageFile: string;
  profilePic;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private alertMessage: AlertMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loggedTeacherID = params['id'];
    });

    this.teacherService.getTeacherProfileData(this.loggedTeacherID).subscribe(
      (data) => {
        this.teacherProfileData = data;
        this.profilePic =
          'http://localhost:3000/' + this.teacherProfileData.imagepath;
        console.log(data);
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
    const formObj = new FormData();
    formObj.append('firstname', formData.value.firstname);
    formObj.append('lastname', formData.value.lastname);
    formObj.append('surname', formData.value.surname);
    formObj.append('username', formData.value.username);
    formObj.append('email', formData.value.email);
    formObj.append('mobile', formData.value.mobile);
    formObj.append('age', formData.value.age);
    formObj.append('gender', formData.value.gender);

    formObj.append('addressline1', formData.value.addressline1);
    formObj.append('addressline2', formData.value.addressline2);
    formObj.append('addressline3', formData.value.addressline3);
    formObj.append('city', formData.value.city);
    formObj.append('qualifications', formData.value.qualifications);
    formObj.append('description', formData.value.description);

    if (!this.selectedFile) {
      formObj.append('imagepath', this.teacherProfileData.imagepath);
    } else {
      console.log(this.selectedFile);
      formObj.append('imageData', this.selectedFile, this.imageFile);
    }

    this.teacherService
      .updateTeacherProfile(this.loggedTeacherID, formObj)
      .subscribe(
        (data) => {
          if (data.update) {
            this.alertMessage.competeAlert('Update Profile Successfully...');
          }
        },
        (error) => {
          this.alertMessage.errorAlert(error.error.message);
        },
        () => {
          this.router.navigate(['user', 'teacher-profile']);
        }
      );
  }

  //execute when reset click
  onResetClick() {
    this.ngOnInit();
  }
}
