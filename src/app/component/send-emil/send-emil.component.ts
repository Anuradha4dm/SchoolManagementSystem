import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-emil',
  templateUrl: './send-emil.component.html',
  styleUrls: ['./send-emil.component.css'],
})
export class SendEmilComponent implements OnInit {
  email: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.email = data.teacheremail;
    });
  }

  onSendEmail(formData: NgForm) {
    console.log(formData.value);
  }
}
