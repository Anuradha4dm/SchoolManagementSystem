import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/services/websocket.service';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-sports-handle',
  templateUrl: './sports-handle.component.html',
  styleUrls: ['./sports-handle.component.css'],
})
export class SportsHandleComponent implements OnInit, OnDestroy {
  studentid: string;
  age: number;
  username: string;

  alredyDoing: { sportname: string; allow: boolean }[];

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.age = +data.age;
      this.studentid = data.studentid;
      this.username = data.studentname;
    });

    this.refreshSportList();
  }

  onSportSubmit(formData: NgForm) {
    var sendData: { studentid: string; category: string; sports: string[] } = {
      studentid: this.studentid,
      category: formData.value.category,
      sports: [],
    };

    for (var key in formData.value) {
      if (formData.value[key] === true) {
        sendData.sports.push(key);
      }
    }

    this.studentProfileService.addSports(sendData).subscribe((response) => {
      console.log(response);
    });
  }

  refreshSportList() {
    this.studentProfileService
      .getSportsList(this.studentid)
      .subscribe((data) => {
        this.alredyDoing = data.sports;
      });
  }

  categorycal() {
    if (this.age === 19 || this.age === 19) {
      return 'Under 19';
    }
    if (this.age === 16 || this.age === 17) {
      return 'Under 17';
    }
    if (this.age === 14 || this.age === 15) {
      return 'Under 15';
    }
    if (this.age === 13 || this.age === 12) {
      return 'Under 13';
    }
    if (this.age <= 11) {
      return 'Under 11';
    }
  }

  ngOnDestroy() {}
}
