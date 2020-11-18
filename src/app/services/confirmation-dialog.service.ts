import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { positionElements, Positioning } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { ConfirmationDialogComponent } from '../component/confirmation-dialog/confirmation-dialog.component';

@Injectable({ providedIn: 'root' })
export class ConfirmationDialogService {
  constructor(private modalService: NgbModal) {}

  public confirm(
    title: string,
    message: string,
    btnCanselText: string = 'Cancel',
    btnOktext: string = 'Ok',
    dialogSize = 'md'
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
