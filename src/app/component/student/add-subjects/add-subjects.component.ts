import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.css'],
})
export class AddSubjectsComponent implements OnInit {
  subjectSet1: string[] = [
    'Mathematics',
    'Sinhala',
    'English',
    'Science',
    'History',
  ];

  subjectFormData: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(data) {
    console.log(data.value);
  }
}
