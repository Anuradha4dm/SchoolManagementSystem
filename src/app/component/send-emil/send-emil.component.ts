import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-send-emil',
  templateUrl: './send-emil.component.html',
  styleUrls: ['./send-emil.component.css'],
})
export class SendEmilComponent implements OnInit {
  email: string;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.email = data.teacheremail;
    });
  }

  onSendEmail(formData: NgForm) {
    this.httpClient
      .post('http://localhost:3000/common/send-email', {
        receiver: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
        sender: formData.value.usename,
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.alertMessageService.errorAlert('Internal Server Error');
        },
        () => {
          this.alertMessageService.competeAlert('Message Send Successfully...');
        }
      );
  }
}
