export class Student {
  public _id: string;
  public surname: string | null;
  public firstName: string | null;
  public lastName: string | null;
  public email: string | null;
  public username: string | null;
  public age: string | null;
  public gender: string | null;
  public classTeacher: string;
  public grade: string | null;
  public startYear: string;
  public birthDate: string;
  public addressLine1: string | null;
  public addressLine2: string | null;
  public addressLine3: string | null;
  public city: string | null;
  public mobile: string | null;

  constructor(
    _id: string,
    surname: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    age: string,
    gender: string,
    grade: string,
    classTeacher: string,
    startYear: string,
    birthDate: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: string,
    mobile: string
  ) {
    this._id = _id;
    this.surname = surname;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.grade = grade;
    this.classTeacher = classTeacher;
    this.startYear = startYear;
    this.birthDate = birthDate;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.city = city;
    this.mobile = mobile;
  }
}
