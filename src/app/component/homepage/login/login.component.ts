import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogInService } from './user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  //this is the start of new change look line 27 in login.component.html (data-dismiss and onclick)
  close;

  //this is the end of cjange
  constructor(private userLogInService: UserLogInService) {}

  ngOnInit(): void {
    this.userLogInService.errorEmitEvent.subscribe(({ error }) => {
      this.errorMessage = error;
    });
  }

  onSubmit(formData) {
    console.log(formData);
    this.userLogInService.postLogInUser({
      _id: formData.value._id,
      password: formData.value.password,
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    var body = document.getElementsByTagName('body')[0];
    var bodys = document.getElementsByClassName('modal-backdrop fade show')[0];
    bodys.remove();
    body.removeAttribute('stype');
    body.classList.remove('modal-open');
  }
}
