import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subjectName',
})
export class SubjectNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    var name = [];

    if (value.includes('_')) {
      name = value.split('_');
      value = name[0] + ' ' + name[1];
    }

    return value;
  }
}
