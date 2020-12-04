import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  startYear=new Date().getFullYear();
  teacherID;
  selectedFile:File=null; //contain the selected image file
  imagePath:string=''; //contain the selected image path
  profilePic;
  subjects=[];

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      console.log(data);
      this.teacherID = "AC_"+(data.teacherCount+1);
    })
  }

  //Execute when profile pic change
  onChange(event) {
    this.selectedFile = event.target.files[0];
    this.imagePath = this.teacherID + "." + this.selectedFile.name.split('.')[1];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  //Add teacher details to database
  onSubmit(value){
    var subjectList:string="";

    for(let i=0;i<this.subjects.length;i++){
      if(i==this.subjects.length-1)
        subjectList+=this.subjects[i];
      else
        subjectList+=this.subjects[i]+",";
    }

    const formdata=new FormData();

    formdata.append('teacherid',this.teacherID);
    formdata.append('addressline1',value.addressline1);
    formdata.append('addressline2',value.addressline2);
    formdata.append('addressline3',value.addressline3);
    formdata.append('age',value.age);
    formdata.append('birthdate',value.birthdate);
    formdata.append('city',value.city);
    formdata.append('email',value.email);
    formdata.append('firstname',value.firstname);
    formdata.append('gender',value.gender);
    formdata.append('lastname',value.lastname);
    formdata.append('mobile',value.mobile);
    formdata.append('numberofleaves',value.nbrofleaves);
    formdata.append('role',value.role);
    formdata.append('startyear',value.startyear);
    formdata.append('surname',value.surname);
    formdata.append('username',value.username);
    formdata.append('subjectlist',subjectList);
    //formdata.append('photo', this.selectedFile, this.imagePath);
    console.log(subjectList)
    this.adminService.addNewTeacher(formdata).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("New Teacher has been added successfully...");
      else
        this.alertService.errorAlert("Cannot add teacher.Try again later");
      })

  }
}
