import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogInService } from './user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage = 'User Name Invalid';

  constructor(private userLogInService: UserLogInService) {}

  ngOnInit(): void {
    this.userLogInService.errorEmitEvent.subscribe(({ error }) => {
      this.errorMessage = error;
    });
  }

  onSubmit(formData) {
    this.userLogInService.postLogInUser(formData.values);
  }
}
