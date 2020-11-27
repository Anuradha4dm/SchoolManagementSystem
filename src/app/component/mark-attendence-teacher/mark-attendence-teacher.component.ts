import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-mark-attendence-teacher',
  templateUrl: './mark-attendence-teacher.component.html',
  styleUrls: ['./mark-attendence-teacher.component.css'],
})
export class MarkAttendenceTeacherComponent implements OnInit {
  @ViewChild('formData', { static: false }) formDataRef: NgForm;

  displayQR: boolean = false;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  valueQR: string = null;
  constructor(
    private httpClient: HttpClient,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {}

  onRest() {
    this.formDataRef.reset({ teacherid: 'AC_' });
  }

  onGenerateQR(formData) {
    const sequreRandom = this.randomString(5);
    const teacherid = formData.value.teacherid;

    this.httpClient
      .post<{ auth: boolean }>(
        'http://localhost:3000/teacher/add-qrcode-data',
        {
          qrcode: sequreRandom,
          teacherid: teacherid,
        }
      )
      .subscribe(
        (data) => {
          if (data.auth) {
            this.alertMessageService.competeAlert(
              'Scan QR and Click The Link....15 Seconds Left...'
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {
          setTimeout(() => {
            this.displayQR = false;
          }, 10000);
        }
      );

    this.valueQR = `http://localhost:3000/attendence-QR?teacherid=${teacherid}&sequreid=${sequreRandom}`;

    this.displayQR = true;
  }

  randomString(length) {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}
