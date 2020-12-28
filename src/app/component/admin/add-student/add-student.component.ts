import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  startYear = new Date().getFullYear();
  age;

  studentID;
  selectedFile: File = null; //contain the selected image file
  imagePath: string = '../../../../assets/img/profile.png'; //contain the selected image path
  profilePic;
  classList;

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService,
  ) {}

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data) => {
      console.log(data);
      this.studentID = 'ST_' + (data.studentCount + 1);
    });

    this.adminService.getClassList().subscribe((data)=>{
      this.classList=data;
    });
  }

  //Execute when profile pic change
  onChange(event) {
    this.selectedFile = event.target.files[0];
    this.imagePath =
      this.studentID + '.' + this.selectedFile.name.split('.')[1];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  ageCalculate(value) {
    this.age = new Date().getFullYear() - value.split('-')[0];
  }

  //Add teacher details to database
  onSubmit(value) {
  
    const formdata = new FormData();

    formdata.append('grade',value.grade);
    formdata.append('addressline1', value.addressline1);
    formdata.append('addressline2', value.addressline2);
    formdata.append('addressline3', value.addressline3);
    formdata.append('password', this.studentID + 'pwd');
    formdata.append('age', this.age);
    formdata.append('birthdate', value.birthdate);
    formdata.append('city', value.city);
    formdata.append('mobile', value.mobile);
    formdata.append('email', value.email);
    formdata.append('firstname', value.firstname);
    formdata.append('gender', value.gender);
    formdata.append('lastname', value.lastname);
    formdata.append('startyear', value.startyear);
    formdata.append('surname', value.surname);
    formdata.append('userid', this.studentID);
    formdata.append('username', value.username);
   
    if (this.selectedFile)
      formdata.append('imageData', this.selectedFile, this.imagePath);

    this.adminService.createStudent(formdata).subscribe((data) => {
      if (data)
        this.alertService.competeAlert(
          'New Student has been added successfully...'
        );
      else this.alertService.errorAlert('Cannot add student.Try again later');
    });
  }
}

