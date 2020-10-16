export class Student {
  public _id: string;
  public surname: string | null;
  public firstName: string | null;
  public lastName: string | null;
  public email: string | null;
  public username: string | null;
  public age: string | null;
  public gender: string | null;
  public grade: string | null;
  public addressLine1: string | null;
  public addressLine2: string | null;
  public addressLine3: string | null;
  public city: string | null;
  public mobile: string | null;
  public isOnline: boolean | null;

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
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: string,
    mobile: string,
    isOnline: boolean
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
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.city = city;
    this.mobile = mobile;
    this.isOnline = isOnline;
  }
}
