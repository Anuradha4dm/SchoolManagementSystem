export interface TeacherProfileData{
  surname: string;
  firstname: string;
  lastname: string;
  username: string;
  imagepath: string;
  startyear: number;
  age: number;
  role: string;
  subjects: string;
  timetable?: string;
  qualifications?: string;
  description?: string;
  mobile: string;
  numberofleaves: number;
  email: string;
}

export interface ClassStudentList{
  grade: string;
  studentListData: {
    _id: string;
    firstname: string;
    lastname: string;
  }[];
}

export class TermResults {
  year = new Date().getFullYear();
  term = 1;
  studentid: string;
  grade: string;
  result: {}[];
}
