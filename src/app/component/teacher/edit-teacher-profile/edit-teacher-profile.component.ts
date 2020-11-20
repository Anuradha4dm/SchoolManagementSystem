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

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loggedTeacherID = params['id'];
    });

    this.teacherService.getTeacherProfileData(this.loggedTeacherID).subscribe(
      (data) => {
        //this.teacherProfileData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onFormSubmit(value) {
    console.log(value);
  }

  //execute when reset click
  onResetClick() {
    this.ngOnInit();
  }
}
