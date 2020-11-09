import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../component/confirmation-dialog/confirmation-dialog.component';

@Injectable({ providedIn: 'root' })
export class ConfirmationDialogService {
  constructor(private modalService: NgbModal) {}

  public confirm(
    title: string,
    message: string,
    btnCanselText: string = 'Cansel',
    btnOktext: string = 'Ok',
    dialogSize: 'sm' | 'lg' = 'sm'
  ): Promise<boolean> {
    const modelRef = this.modalService.open(ConfirmationDialogComponent, {
      size: dialogSize,
    });
    modelRef.componentInstance.title = title;
    modelRef.componentInstance.message = message;
    modelRef.componentInstance.btnOkText = btnOktext;
    modelRef.componentInstance.btnCancelText = btnCanselText;

    return modelRef.result;
  }
}
