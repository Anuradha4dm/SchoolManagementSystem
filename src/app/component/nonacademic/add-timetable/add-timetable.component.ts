import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../../admin/admin.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css']
})
export class AddTimetableComponent implements OnInit {
  type="class"; //contain category that assign timetables class or teacher
  classList;
  teacherList;
  page:number=1;
  
  constructor(
    private nonService: NonAcademicService,
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.onChange();
  }

  //execute when select box change
  onChange(){
    if(this.type=="class"){
      this.adminService.getClassList().subscribe((data)=>{
        this.classList=data;
      });
    }

    if(this.type=="teacher"){
      this.nonService.getTeacherListBySubject("").subscribe((data)=>{
        this.teacherList=data;
      });
    }
  }

  addTimetable(event,identity){
    var selectedFile = <File>event.target.files[0];
    var filepath = identity + '.' + selectedFile.name.split('.')[1];

    const formData = new FormData();

    formData.append("type",this.type);
    formData.append("id",identity);
    formData.append("timetable",selectedFile,filepath);

    this.nonService.addTimetables(formData).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("Timetable added successfully...");
    },(error)=>{
      this.alertService.errorAlert("Timetable couldn't added, try again later...");
    });
  }
}
