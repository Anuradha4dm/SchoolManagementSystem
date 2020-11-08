import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserLogInService } from './component/homepage/login/user-login.service';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SchoolMangementSystem';

  constructor(private userLoginService: UserLogInService) {}

  ngOnInit(): void {
    this.userLoginService.autoLogin();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
