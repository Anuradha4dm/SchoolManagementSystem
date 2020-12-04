import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../../admin/admin.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-modify-class',
  templateUrl: './modify-class.component.html',
  styleUrls: ['./modify-class.component.css']
})
export class ModifyClassComponent implements OnInit {
  classList;
  selectedClass; //contain selected class data
  page; //for pagination
  show: boolean=false;
  findTeacher:boolean=false;
  freeTeacherList;
  newTeacherID;
  teacherTimetable; //contain one teacher's teaching class list
  subjectTeacherList; //contain teacher list according to subject
  registerSubject;
  registerTeacher; //contain new teacher assign to subject

  constructor(
    private adminService: AdminService,
    private nonService: NonAcademicService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getClassList().subscribe((data)=>{
      this.classList=data;
      console.log(data)
    });

    this.nonService.findFreeClassTeachers().subscribe((data)=>{
      this.freeTeacherList=data;
      console.log(data);
    });
  }

  //get selected class details
  onRowClick(classData){
    this.selectedClass = classData;
    this.show=true;
    this.findTeacher=false;
  }

  //execute when add teacher or confirm button click
  changeClassTeacher(){
   this.nonService.changeClassTeacher(this.newTeacherID,this.selectedClass.classid).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("New Teacher added to the class...")
      else
       this.alertService.errorAlert("Sorry,Teacher cannot assign to the class...");

      this.show=false;
    });
  }

  //return list of teacher according to subject
  onSelectSubjectChange(value){
    this.registerSubject=value;

    this.nonService.getTeacherListBySubject(value).subscribe((data)=>{
      this.subjectTeacherList=data;
    });
  }

  //execute when select teacher select box changes
  onSelectTeacherChange(value){
    this.registerTeacher=value;

    this.nonService.getListOfSubjectsTeachedByTeacher(this.registerSubject).subscribe((data)=>{
      this.teacherTimetable=data.subjectlist;
      console.log(data)
    })
  }

  //add new teacher with subject
  onAddTeacherClick(){
    this.nonService.addTeacherSubjects(this.selectedClass.grade,this.registerSubject,this.registerTeacher).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("Subject assign to teacher successfully...")
    });
  }
}
