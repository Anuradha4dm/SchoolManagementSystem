import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogInService } from './user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  //this is the start of new change look line 27 in login.component.html (data-dismiss and onclick)

  //this is the end of cjange
  constructor(
    private userLogInService: UserLogInService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLogInService.errorEmitEvent.subscribe(({ error }) => {
      this.errorMessage = error;
    });

    // this.userLogInService.userAuthData.subscribe((userData) => {
    //   if (userData.getAuthentication) {
    //     this.router.navigate(['/userprofile']);
    //   }
    // });
  }

  onSubmit(formData) {
    this.userLogInService.postLogInUser({
      _id: formData.value._id,
      password: formData.value.password,
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    var bodys = document.getElementsByClassName('modal-backdrop fade show')[0];
    bodys.remove();
    body.removeAttribute('style');
    body.classList.remove('modal-open');
    console.log(bodys);
  }
}
