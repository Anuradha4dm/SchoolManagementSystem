import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-edit-non',
  templateUrl: './edit-non.component.html',
  styleUrls: ['./edit-non.component.css']
})
export class EditNonComponent implements OnInit {
  loggedUserID;
  userProfileData;
  selectedFile: File;
  imageFile: string;
  profilePic;

  constructor(
    private route: ActivatedRoute,
    private nonService: NonAcademicService,
    private alertMessage: AlertMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loggedUserID = params['id'];
    });

    this.nonService.getNonAcademicProfileData(this.loggedUserID).subscribe((data) => {
        this.userProfileData = data;
        this.profilePic =
          'http://localhost:3000/' + this.userProfileData.imagepath;
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
    this.imageFile = this.loggedUserID + '.' + extention;

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  onFormSubmit(formData) {
    const formObj = new FormData();
    formObj.append('id', this.loggedUserID);
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
    formObj.append('qualifications',formData.value.qualifications);
    formObj.append('description',formData.value.description);


    if (!this.selectedFile) {
      formObj.append('imagepath', this.userProfileData.imagepath);
    } else {
      formObj.append('imageData', this.selectedFile, this.imageFile);
    }

    this.nonService.updateNonProfile(formObj).subscribe(
        (data) => {
          if (data) {
            this.alertMessage.competeAlert('Update Profile Successfully...');
          }
        },
        (error) => {
          this.alertMessage.errorAlert(error.error.message);
        },
        () => {
          this.router.navigate(['user', 'profile']);
        }
      );
  }

  //execute when reset click
  onResetClick() {
    this.ngOnInit();
  }
}
