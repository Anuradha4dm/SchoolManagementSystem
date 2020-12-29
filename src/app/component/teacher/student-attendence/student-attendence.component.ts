import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClassStudentList } from 'src/app/models/teacher.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
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
  marked:boolean=false;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private confirmationDialogService: ConfirmationDialogService,
    private toastr: ToastrService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.teacherID = userData.getUserId;
    });

    this.teacherService.getClassStudentList(this.teacherID)
      .subscribe((data) => {
        this.classStudentList = data;
        this.checkStatus();
    });

  }

  //execute when change the date
  checkStatus(){
    this.teacherService.checkAttendanceStatus(this.date,this.classStudentList.studentListData[0]._id).subscribe((data)=>{
      this.marked=data.mark;
    });
  }

  //execute when change the slider state
  onSliderChange(event) {
    if (event.checked)
      this.absent -= 1;
    else
      this.absent += 1;
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
    this.teacherService.markStudentAttendence(this.date,this.teacherID,formValue)
      .subscribe();

      this.toastr.info(
      '<span class="now-ui-icons ui-1_bell-53"></span> Done Submition For ' +
        new Date(this.date),
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
    this.teacherService.reSubmitStudentAttendance(this.date,this.teacherID,formValue)
      .subscribe((data)=>{
        if(data)
          this.alertService.competeAlert("Attendance updated successfully for "+new Date(this.date));
      },(error)=>{
        this.alertService.errorAlert("Sorry,Couldn't updated attendance...")
      });

  }
}
