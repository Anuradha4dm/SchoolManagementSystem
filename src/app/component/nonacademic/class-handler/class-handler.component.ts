import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';
import { stringify } from 'querystring';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { WebSocketService } from 'src/app/services/websocket.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-class-handler',
  templateUrl: './class-handler.component.html',
  styleUrls: ['./class-handler.component.css'],
})
export class ClassHandlerComponent implements OnInit, OnDestroy {
  @ViewChild('formData', { static: true }) formDataRef;

  newlyAddedSubject: {
    subjectid: number;
    subjectname: string;
    assigndate: Date;
    grade: string;
  } = { subjectid: 0, subjectname: '', assigndate: new Date(), grade: '' };

  subjectList: {
    subjectid: number;
    subjectname: string;
    assigndate: Date;
    grade: string;
  }[] = null;

  freeClassTeacher: { teacherid: string; username: string }[] = [];
  enableSelectTeacher: boolean = false;

  filename: string;
  selectedFile: File;

  teacherData: {
    fullname: string;
    email: string;
    teacherid: string;
    qualifications: string[];
    image: string;
  } = {
    fullname: 'Teacher Name',
    email: 'Teacher Email',
    teacherid: '',

    qualifications: [],
    image:
      'https://lk-maruads-1.nyc3.cdn.digitaloceanspaces.com/thumb_103339_0.png',
  };

  classList: string[] = [
    '6_A',
    '6_B',
    '6_C',
    '6_D',
    '6_E',
    '7_A',
    '7_B',
    '7_C',
    '7_D',
    '7_E',
    '8_A',
    '8_B',
    '8_C',
    '8_D',
    '8_E',
    '9_A',
    '9_B',
    '9_C',
    '9_D',
    '9_E',
    '10_A',
    '10_B',
    '10_C',
    '10_D',
    '10_E',
    '11_A',
    '11_B',
    '11_C',
    '11_D',
    '11_E',
    '12_MATH',
    '12_BIO',
    '12_ART',
    '12_COM',
    '12_TEC',
    '13_MATH',
    '13_BIO',
    '13_ART',
    '13_COM',
    '13_TEC',
  ];

  subjectidListenerSubscription: Subscription;

  constructor(
    private nonAcademicService: NonAcademicService,
    private alertMessageService: AlertMessageService,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    const form = new FormData();

    if (this.enableSelectTeacher) {
      console.log(formData.value.teacherid, this.teacherData.teacherid);

      form.append('newTeacherid', formData.value.teacherid);
      form.append('pastTeacherid', this.teacherData.teacherid);
    }

    form.append('classname', formData.value.classname);
    form.append('timetable', this.selectedFile, this.filename);

    console.log(form);

    this.nonAcademicService.updateClassProperties(form).subscribe((data) => {
      if (data.success) {
        this.alertMessageService.competeAlert('Update Successfull...');
        this.formDataRef.reset();
      }
    });
  }

  selectTeacher() {
    this.enableSelectTeacher = !this.enableSelectTeacher;

    this.nonAcademicService.findFreeClassTeachers().subscribe((data) => {
      this.freeClassTeacher = data.teachers;
    });
  }

  onFileChange(event, classRef) {
    this.selectedFile = event.target.files[0];
    const extention = this.selectedFile.name.split('.')[1];
    this.filename = 'tt_' + classRef.value + '.' + extention;
    console.log(this.filename);
  }

  onSelectClass(value: string) {
    this.nonAcademicService.getClassTeacherForClassHandler(value).subscribe(
      (data) => {
        this.teacherData.email = data.email;
        this.teacherData.image = 'http://localhost:3000/' + data.image;
        this.teacherData.fullname = data.fullname;
        this.teacherData.teacherid = data.teacherid;
        this.teacherData.qualifications = data.qualifications.split('|');
      },
      (error) => {
        this.alertMessageService.errorAlert(error.error.message);
      }
    );
  }

  findSubjectsOfTeacher(teacherid: string) {
    this.nonAcademicService
      .getListOfSubjectsTeachedByTeacher(teacherid)
      .subscribe(
        (listdata) => {
          this.subjectList = listdata.subjectlist;
        },
        (error) => {
          console.log(error);
          // this.alertMessageService.errorAlert(error.error.message);
        }
      );
  }

  onSubmitSubjectList(formDataSub: NgForm) {
    console.log(formDataSub.value);
  }

  removeSubect(i: number) {
    this.subjectList.splice(i, 1);
  }

  onAddSubject(subjectname: string, classname: string) {
    this.webSocketService.emit('findClassId', {
      subjectname: subjectname.toLocaleLowerCase(),
      classname: classname.toUpperCase(),
    });
    this.newlyAddedSubject.subjectname = subjectname.toLocaleLowerCase();
    this.newlyAddedSubject.grade = classname.toUpperCase();
    this.newlyAddedSubject.assigndate = new Date();

    this.subjectidListenerSubscription = this.webSocketService
      .listen('subjectIdRes')
      .subscribe(
        (data) => {
          console.log(data.subjectid);
          this.newlyAddedSubject.subjectid = data.subjectid;
        },
        (error) => {
          this.alertMessageService.errorAlert('Can Not Find Details....');
        },
        () => {
          this.subjectList.push(this.newlyAddedSubject);
          this.newlyAddedSubject = {
            subjectid: 0,
            subjectname: '',
            assigndate: new Date(),
            grade: '',
          };
        }
      );
  }

  ngOnDestroy() {
    this.subjectidListenerSubscription.unsubscribe();
  }
}
