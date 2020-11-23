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
