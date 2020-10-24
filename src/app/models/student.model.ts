export interface Student {
  _id: string;
  surname: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profilePicture?: Blob;
  age: string;
  gender: string;
  classTeacher?: string;
  grade?: string;
  startYear: string;
  birthDate: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  mobile: string;

  // constructor(
  //   _id: string,
  //   surname: string,
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   username: string,
  //   age: string,
  //   gender: string,
  //   grade: string,
  //   classTeacher: string,
  //   startYear: string,
  //   birthDate: string,
  //   addressLine1: string,
  //   addressLine2: string,
  //   addressLine3: string,
  //   city: string,
  //   mobile: string
  // ) {
  //   this._id = _id;
  //   this.surname = surname;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.username = username;
  //   this.age = age;
  //   this.email = email;
  //   this.gender = gender;
  //   this.grade = grade;
  //   this.classTeacher = classTeacher;
  //   this.startYear = startYear;
  //   this.birthDate = birthDate;
  //   this.addressLine1 = addressLine1;
  //   this.addressLine2 = addressLine2;
  //   this.addressLine3 = addressLine3;
  //   this.city = city;
  //   this.mobile = mobile;
  // }
}
