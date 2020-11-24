import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-al-subjects',
  templateUrl: './register-al-subjects.component.html',
  styleUrls: ['./register-al-subjects.component.css'],
})
export class RegisterAlSubjectsComponent implements OnInit {
  showMessageBox: boolean = false;

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
    stateString: String;
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
    stateString: String;
  }[] = [];

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private nonAcademicService: NonAcademicService
  ) {}

  ngOnInit(): void {
    this.nonAcademicService
      .getPendingAdvanceLevelRequest()
      .subscribe((data) => {
        this.advanceLevelRequestDataArray = data.dataset;
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
          }
          if (result === 'pending') {
            this.advanceLevelRequestDataArray[i].stateString = 'Pending...';
            this.advanceLevelRequestDataArray[i].state = 2;
            this.advanceLevelRequestDataArray[i].viewcount++;
          }
          if (result === 'reject') {
            this.advanceLevelRequestDataArray[i].stateString = 'Reject';
            this.advanceLevelRequestDataArray[i].state = 0;
            this.advanceLevelRequestDataArray[i].viewcount++;
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
