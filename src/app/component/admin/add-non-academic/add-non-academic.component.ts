import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-non-academic',
  templateUrl: './add-non-academic.component.html',
  styleUrls: ['./add-non-academic.component.css']
})
export class AddNonAcademicComponent implements OnInit {
  nonAcademicID;
  age;
  selectedFile:File=null; //contain the selected image file
  imagePath:string=''; //contain the selected image path
  profilePic;

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      this.nonAcademicID = "NAC_"+(data.nonCount+1);
    })
  }

  ageCalculate(value){
    this.age=new Date().getFullYear() - value.split('-')[0];
  }
  
  //Execute when profile pic change
  onChange(event) {
    this.selectedFile = event.target.files[0];
    this.imagePath = this.nonAcademicID + "." + this.selectedFile.name.split('.')[1];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  //Add teacher details to database
  createUser(value){
    const formdata=new FormData();

    formdata.append('id',this.nonAcademicID);
    formdata.append('firstname',value.firstname);
    formdata.append('lastname',value.lastname);
    formdata.append('surname',value.surname);
    formdata.append('username',value.username);
    formdata.append('role',value.role);
    formdata.append('mobile',value.mobile);
    formdata.append('email',value.email);
    formdata.append('birthdate',value.birthdate);
    formdata.append('age',this.age);
    formdata.append('gender',value.gender);
    formdata.append('addressline1',value.addressline1);
    formdata.append('addressline2',value.addressline2);
    formdata.append('addressline3',value.addressline3);
    formdata.append('city',value.city);

    if(this.selectedFile)
      formdata.append('imageData', this.selectedFile, this.imagePath);

    this.adminService.createNonAcademic(formdata).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("New user created successfully...");
      else
        this.alertService.errorAlert("Couldn't create new user, try again later");
    });
  }
}
