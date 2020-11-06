import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogInService } from './user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  //this is the start of new change look line 27 in login.component.html (data-dismiss and onclick)
  close;

  onClick() {
    this.close = 'modal';
  }
  //this is the end of cjange
  constructor(private userLogInService: UserLogInService) {}

  ngOnInit(): void {
    this.userLogInService.errorEmitEvent.subscribe(({ error }) => {
      this.errorMessage = error;
    });
  }

  onSubmit(formData) {
    this.userLogInService.postLogInUser({
      _id: formData.value._id,
      password: formData.value.password,
    });
  }
}
