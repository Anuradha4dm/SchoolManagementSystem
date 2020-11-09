import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private httpClient: HttpClient) {}

  getStudentListForAddResult(id: string) {
    return this.httpClient.get<{
      grade: string;
      studentListData: {
        _id: string;
        firstname: string;
        lastname: string;
      }[];
    }>('http://localhost:3000/teacher/class-student-list/' + id);
  }

  getSubjectsOfSpecificStudent(studentid: string, grade: string) {
    return this.httpClient.post<{
      subjectlist: { subjectid: string; subjectname: string }[];
    }>('http://localhost:3000/teacher/get-student-subject', {
      grade: grade,
      studentid: studentid,
    });
  }
  
  addStudentResult(studentResult){

  }

  //new methods start
  
  getTeacherClassList(id: string){
    //get loged teacher id and need to return teachers classes with related year from class tabel
    /*format
      [
        {year: number,class: string},
        {year: number,class: string},
      ]*/
  }

  getAverage(year:number,grade:string,term:string){
    //need to get student id,fullname,average,position from results table
    /*format
      [
        {id: string,fullname: string,average: number,position: number}
        {id: string,fullname: string,average: number,position: number}
      ]
    */ 
  }

  getMarksList(year:number,term: string,id: string){
    //need to get subject names with marks related to above details from results table
    /*format
    [
      {subjectname: string,mark: number},
      {subjectname: string,mark: number},
    ]*/
  }
  //new methods end

}
