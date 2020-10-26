import { Component, OnInit } from '@angular/core';
import { UserLogInService } from '../component/login/user-login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private userLogInService: UserLogInService) {}

  userLogInData: boolean = true;

  ngOnInit(): void {
    this.userLogInService.userAuthData.subscribe(({ authentication }) => {
      this.userLogInData = authentication;
    });
  }
}
