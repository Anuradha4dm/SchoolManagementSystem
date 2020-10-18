import { Pipe, PipeTransform } from '@angular/core';

declare interface Student {
  _id: string;
  username: string;
  mobile: string;
  email: string;
  isOnline?: boolean;
}

@Pipe({
  name: 'filterStudent',
})
export class FilterStudentPipe implements PipeTransform {
  transform(value: Student[], ...args: string[]): Student[] {
    let searchStudent: Student[] = [];
    if (args.length != 0 || args[0] != '') {
      value.forEach((student) => {
        if (student.username.includes(args[0])) {
          searchStudent.push(student);
        }
      });
      return searchStudent;
    }

    return value;
  }
}
