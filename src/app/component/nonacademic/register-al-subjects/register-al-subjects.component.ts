import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-al-subjects',
  templateUrl: './register-al-subjects.component.html',
  styleUrls: ['./register-al-subjects.component.css'],
})
export class RegisterAlSubjectsComponent implements OnInit {
  @ViewChild('messagecontent', { static: true }) messagecontent: ElementRef;

  showMessageBox: boolean = false;
  loginUserData: LogInUserModel;

  selectedRequest: {
    requestid: number;
    stream: string;
    allcount: boolean;
    mathresult: boolean;
    sinhalaresult: boolean;
    viewcount: number;
    state: number;
    createdAt: Date;
    studentId: string;
    stateString: string;
  };

  advanceLevelRequestDataArray: {
    requestid: number;
    stream: string;
    allcount: boolean;
    mathresult: boolean;
    sinhalaresult: boolean;
    viewcount: number;
    state: number;
    createdAt: Date;
    studentId: string;
    stateString: string;
  }[] = [];

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private nonAcademicService: NonAcademicService,
    private userLoginService: UserLogInService,
    private alterMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.nonAcademicService
      .getPendingAdvanceLevelRequest()
      .subscribe((data) => {
        this.advanceLevelRequestDataArray = data.dataset;
      });

    this.userLoginService.userAuthData.subscribe((data) => {
      this.loginUserData = data;
    });
  }

  open(content, i) {
    this.selectedRequest = this.advanceLevelRequestDataArray[i];

    this.showMessageBox = !(
      this.selectedRequest.allcount &&
      this.selectedRequest.mathresult &&
      this.selectedRequest.sinhalaresult
    );

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;

          if (result === 'allow') {
            this.advanceLevelRequestDataArray[i].stateString = 'Allow';
            this.advanceLevelRequestDataArray[i].state = 1;
            this.advanceLevelRequestDataArray[i].viewcount++;

            this.nonAcademicService
              .responseForTheRequestedAdvanceLevelClass(
                1,
                this.selectedRequest.requestid,
                this.loginUserData.getUserId,
                this.selectedRequest.studentId,
                '',
                this.selectedRequest.stream
              )
              .subscribe(
                (data) => {
                  if (data.udpaterecode) {
                    this.alterMessageService.competeAlert(
                      'You Have Allow Student Request Successfully'
                    );
                  }
                },
                (error) => {
                  this.alterMessageService.errorAlert(error.error.message);
                }
              );
          }
          if (result === 'pending') {
            this.advanceLevelRequestDataArray[i].viewcount++;
          }
          if (result === 'reject') {
            this.advanceLevelRequestDataArray[i].stateString = 'Reject';
            this.advanceLevelRequestDataArray[i].state = 0;
            this.advanceLevelRequestDataArray[i].viewcount++;

            this.nonAcademicService
              .responseForTheRequestedAdvanceLevelClass(
                0,
                this.selectedRequest.requestid,
                this.loginUserData.getUserId,
                this.selectedRequest.studentId,
                'this is rejected message',
                this.selectedRequest.stateString
              )
              .subscribe(
                (data) => {
                  if (data.udpaterecode) {
                    this.alterMessageService.competeAlert(
                      'You Have Reject Student Request'
                    );
                  }
                },
                (error) => {
                  this.alterMessageService.errorAlert(error.error.message);
                }
              );
          }
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log(this.closeResult);
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
