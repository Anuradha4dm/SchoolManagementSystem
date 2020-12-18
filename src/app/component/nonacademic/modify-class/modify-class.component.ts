import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../../admin/admin.service';
import { NonAcademicService } from '../nonacademic.service';
import { SubjectListsService } from '../subject-lists.service';

@Component({
  selector: 'app-modify-class',
  templateUrl: './modify-class.component.html',
  styleUrls: ['./modify-class.component.css']
})
export class ModifyClassComponent implements OnInit {
  classList; //contain all classes available
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
  alreadyRegisteredSubjects; //contain already registered subjects of class
  completeSubjectList; //contain all subject list related to the class

  constructor(
    private adminService: AdminService,
    private nonService: NonAcademicService,
    private subjectList: SubjectListsService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getClassList().subscribe((data)=>{
      this.classList=data;
      console.log(data)
    });
  }

  //get selected class details
  onRowClick(classData){
    this.selectedClass = classData;
    this.show=true;
    this.findTeacher=false;
    
    this.nonService.findFreeClassTeachers().subscribe((data)=>{
      this.freeTeacherList=data;
    });

    this.nonService.getClassRegisteredSubjects(classData.grade).subscribe((data)=>{
      this.alreadyRegisteredSubjects=data;
    });

    this.completeSubjectList=this.subjectList.getAllSubjectsOfGrade(classData.grade);
    console.log(this.completeSubjectList);
    
  }

  //execute when confirm button click
  changeClassTeacher(){
   this.nonService.changeClassTeacher(this.newTeacherID,this.selectedClass.classid).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("Class teacher changed successfully...")
      else
       this.alertService.errorAlert("Sorry,Teacher cannot assign to the class...");
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
    
    this.nonService.getListOfSubjectsTeachedByTeacher(value).subscribe((data)=>{
      this.teacherTimetable=data.subjectlist;
      console.log(data)
    })
  }

  //add new teacher with subject
  onAddTeacherClick(){
    this.nonService.addTeacherSubjects(this.selectedClass.grade,this.registerSubject,this.registerTeacher).subscribe((data)=>{
      if(data)
        this.alertService.competeAlert("Subject assign to teacher successfully...");
    });
  }
}
