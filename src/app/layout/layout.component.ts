import { Component, OnInit } from '@angular/core';
import { UserLogInService } from '../component/homepage/login/user-login.service';
import { LogInUserModel } from '../models/login-user.model';
import { AlertMessageService } from '../services/alert-message.service';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';
import { WebSocketService } from '../services/websocket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  role: string;
  show=true;

  constructor() {}

  ngOnInit(): void {}

  changeStatus(){
    this.show=false;
  }
}
