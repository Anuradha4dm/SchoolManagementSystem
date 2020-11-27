import { Component, OnInit } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-mark-attendence-teacher',
  templateUrl: './mark-attendence-teacher.component.html',
  styleUrls: ['./mark-attendence-teacher.component.css'],
})
export class MarkAttendenceTeacherComponent implements OnInit {
  displayQR: boolean = false;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  valueQR: string = null;
  constructor() {}

  ngOnInit(): void {}

  onRest() {}

  onGenerateQR(formData) {
    const sequreRandom = this.randomString(5);
    const teacherid = formData.value.teacherid;

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
