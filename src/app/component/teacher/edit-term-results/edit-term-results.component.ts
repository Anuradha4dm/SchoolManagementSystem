import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { element } from 'protractor';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { TeacherService } from '../teacher.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-edit-term-results',
  templateUrl: './edit-term-results.component.html',
  styleUrls: ['./edit-term-results.component.css'],
})
export class EditTermResultsComponent implements OnInit {
  loggedUserID: string;
  classID: string;
  year: number = new Date().getFullYear();
  selectedTerm: number = 1;
  selectedStudent; //to contain selected student data
  place: number; //contain selected student place
  avarageData = []; //contain students avarage and position data of the term
  studentPastResults;

  page: number; //for pagination current page
  show: boolean = false;
  selectedFile: File;

  constructor(
    private userLoginService: UserLogInService,
    private teacherService: TeacherService,
    private alertService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loggedUserID = userData.getUserId;
    });

    this.teacherService
      .getTeacherProfileData(this.loggedUserID)
      .subscribe((data) => {
        this.classID = data.class;
        this.onTermChange();
      });
  }

  //Execute when select box change,gives students avarage data
  onTermChange() {
    this.show = false;
    this.teacherService
      .postGetAverageDataWithStudent(this.year, this.selectedTerm, this.classID)
      .subscribe((data) => {
        this.avarageData = data.avarageData.sort((a, b) => {
          return b.average - a.average;
        });
        console.log(this.avarageData);
      });
  }

  //Execute when click one row
  onRowClick(student, index) {
    this.selectedStudent = student;
    this.place = index;

    this.teacherService
      .getStudentPastResultForEdit(this.year, this.selectedTerm, student._id)
      .subscribe((data) => {
        this.studentPastResults = data;
      });
    this.show = true;
  }

  updateResults(formData) {
    let results = [];

    for (let key in formData) {
      results.push({
        subjectid: Number.parseInt(key),
        mark: formData[key] as number,
      });
    }

    this.teacherService
      .updateStudentResultAfterEdit(
        this.year,
        this.selectedTerm,
        this.selectedStudent._id,
        results
      )
      .subscribe(
        (data) => {
          this.alertService.competeAlert('Results updated successfully..');
        },
        (error) => {
          this.alertService.competeAlert("Results couldn't updated..");
        },
        () => {
          this.ngOnInit();
        }
      );
  }

  //used when print report press
  printResults() {
    var data = document.getElementById('formContent');
    const formData = new FormData();

    html2canvas(data).then((canvas) => {
      var imgWidth = 380;
      var imgHeight = 388;

      const contentDataURL = canvas.toDataURL('image/png');
      var position = 0;
      let pdf = new jsPDF('p', 'pt', 'a5');
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight);

      formData.append('id', this.selectedStudent._id);
      formData.append('grade', this.classID);
      formData.append('place', this.place.toString());

      this.teacherService.printReport(formData).subscribe((data) => {
        if (data) {
          this.alertService.competeAlert(
            'Report has been printed successfully...'
          );
          pdf.save(this.selectedStudent._id + '.pdf');
        } else if (!data)
          this.alertService.errorAlert(
            'You have already printed the report...'
          );
        else
          this.alertService.errorAlert(
            "Couldn't print report, try again later..."
          );
      });
    });
  }

  //send data to backend here
  sendReport(event) {
    this.selectedFile = event.target.files[0];
    var imageFile = event.target.files[0].name;

    const formData = new FormData();
    formData.append('report', this.selectedFile, imageFile);

    this.teacherService.sendEreport(formData).subscribe((data) => {
      console.log(data);
    });
  }
}
