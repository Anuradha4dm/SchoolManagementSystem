//to get teacher profile data
export interface TeacherProfileData{
  surname: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  imagepath: string;
  startyear: number;
  age: number;
  gender: string;
  role: string;
  subjects:[
    {
      subjectid: number,
      subjectname: string;
      grade: string;
      subjectinfo: string;
      mandatory: boolean;
    }
  ];
  timetable?: string;
  description?: string;
  qualifications?: string;
  mobile: string;
  numberofleaves: number;
  class: string;
  addressline1: string;
  addressline2: string;
  addressline3: string;
  city: string;
}

//to get student list of class
export interface ClassStudentList{
  grade: string;
  studentListData: {
    _id: string;
    firstname: string;
    lastname: string;
  }[];
}

//use to keep last year specific results student data
export interface LastYearData{
  class: string;
  districtrank?: number;
  islandrank?: number;
  zscore?: number;
  studentid: string;
  indexnumber: number;
}

export interface SubjectAnalysis{
  acount: number;
  bcount: number;
  ccount: number;
  Scount: number;
  wcount: number;
}

export interface ITermResults{
  subjectid: string;
  subjectname: string;
  mark?: number;
}

export class TermResults {
  year = new Date().getFullYear();
  term = 1;
  studentid: string;
  grade: string;
  result: {}[];
}
