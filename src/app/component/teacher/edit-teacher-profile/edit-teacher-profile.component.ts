import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher-profile',
  templateUrl: './edit-teacher-profile.component.html',
  styleUrls: ['./edit-teacher-profile.component.css']
})
export class EditTeacherProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(value){
    console.log(value);
  }

  //execute when reset click
  onResetClick(){
    this.ngOnInit();
  }
}
