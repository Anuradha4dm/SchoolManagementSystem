import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from '../../student/student-profile.service';

@Component({
  selector: 'app-tsend-notification',
  templateUrl: './tsend-notification.component.html',
  styleUrls: ['./tsend-notification.component.css']
})

export class TsendNotificationComponent implements OnInit {
 
  selectedList: string[]=["s"];

  constructor(private ser: StudentProfileService) { }

  ngOnInit(): void {
  }

  updateSelectedList(event){
    if(event.checked){
      this.selectedList.push("true");
    }
    else{
      this.selectedList.push("false");
    }

  }

  //execute when send button click
  onSendClick(){
  }
}
