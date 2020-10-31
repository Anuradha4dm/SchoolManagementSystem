import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AlertMessageService {
  constructor(private toastr: ToastrService) {}

  competeAlert(message: string) {
    this.toastr.info(
      '<span class="now-ui-icons ui-1_bell-53"></span> ' + message,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-success alert-with-icon',
        positionClass: 'toast-top-center',
      }
    );
  }

  errorAlert(message: string) {
    this.toastr.info(
      '<span class="now-ui-icons ui-1_bell-53"></span> ' + message,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-danger alert-with-icon',
        positionClass: 'toast-top-center',
      }
    );
  }
}
