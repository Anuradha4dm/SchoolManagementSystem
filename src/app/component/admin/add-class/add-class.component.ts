import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  letterList=['A','B','C','D','E','F','G','H','I','J'];
  gradeList=[6,7,8,9,10,11,12,13];
  streamList=["Maths","Bio","Art","Commerce","Tech"];

  selectedGrade;
  selectedLetter;
  selectedStream;

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
  }

  //Excecute when create button click
  onSubmit(value){
    let className = value.grade + "_" + value.letter;

    if(value.stream){
      className += "_" + value.stream;
    }

    this.adminService.createNewClass(className).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("New class created successfully...");
    },(error)=>{
      this.alertService.errorAlert("Class cannot create at this time...");
    })
  }
}
