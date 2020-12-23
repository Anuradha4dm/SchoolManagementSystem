import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClassStudentList } from 'src/app/models/teacher.model';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';

import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
})
export class StudentAttendenceComponent implements OnInit {
  teacherID: string;
  date: Date = new Date();
  classStudentList: ClassStudentList;
  absent: number = 0;

  otherClass: boolean = false;
  enterClicked: boolean = false;
  otherID: string;
  error: boolean = true;
  doneSubmition: boolean = false;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private confirmationDialogService: ConfirmationDialogService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.teacherID = userData.getUserId;
    });

    this.teacherService
      .getClassStudentList(this.teacherID)
      .subscribe((data) => {
        this.classStudentList = data;
      });
  }

  //execute when change the slider state
  onSliderChange(event) {
    if (event.checked) this.absent -= 1;
    else this.absent += 1;
  }

  //execute when enter button click
  onEnterClick(value) {
    this.otherID = value.toUpperCase();
    this.teacherService.getClassStudentList(this.otherID).subscribe((data) => {
      this.classStudentList = data;
      this.teacherID = this.otherID;
      this.error = false;
    });
    this.enterClicked = true;
  }

  onCancelClick() {
    this.ngOnInit();
    //this.test1=this.studentList.find((res)=>{return res._id.match(id) && res.firstname.match(firstname)})
  }

  //execute when form submit
  onAttendanceSubmit(formValue) {
    this.teacherService
      .markStudentAttendence(this.teacherID, formValue, new Date()) //apply date to here
      .subscribe();

    this.toastr.info(
      '<span class="now-ui-icons ui-1_bell-53"></span> Done Submition For ' +
        this.date,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: 'toast-top-center',
      }
    );
    this.doneSubmition = true;
  }

  onReSubmitbtnClick(formValue) {
    this.teacherService
      .markStudentAttendence(this.teacherID, formValue, new Date()) //apply date here
      .subscribe();

    this.confirmationDialogService
      .confirm(
        'Please confirm...',
        'Do you really want to resubmit the attendance?'
      )
      .then((confirmed) => {
        if (confirmed) {
          this.doneSubmition = true;
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
}
