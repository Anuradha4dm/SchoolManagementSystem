import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css'],
})
export class AddNewProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {}
}
