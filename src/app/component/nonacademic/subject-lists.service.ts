import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectListsService {

  constructor() { }

   getAllSubjectsOfGrade(className: string){
      const grade = className.split('_')[0];

      if(grade=='12' || grade=='13'){
        var str = className.split('_');
        const stream = str[str.length-1];
        
        if(stream=="MATH"){
          return ['combine_mathematics', 'physics','chemistry','informaticon_tehnology','english'];
        }
        
        if(stream=="BIO"){
          return ['Biology', 'chemistry','physics', 'agriculture','english'];
        }

        if(stream=="ART"){
          return [    
          'economics',
          'roman_civilization',
          'home_economics',
          'divinity',
          'ict',
          'english',
          'statistics',
          'political_science',
          'art',
          'french',
          'accounts',
          'geography',
          'logic',
          'sinhala',
          'hindi',
          ];
        }

        if(stream=="TEC"){
          return [
            'science_for_teachnology',
            'engineering_tech',
            'bio_system_tech',
            'english',
            'information_technology',
            'economics',
            'geography',
            'commerce',
            'accounting',
            'art',
          ];
        }

        if(stream=="COM"){
          return [
            'economics',
            'roman_civilization',
            'home_economics',
            'divinity',
            'ict',
            'english',
            'statistics',
            'political_science',
            'art',
            'french',
            'accounts',
            'geography',
            'logic',
            'sinhala',
            'hindi',
          ];
        }

      }

      else if(grade=='10' || grade=='11'){
        return [
          'mathematics',
          'sinhala',
          'science',
          'history',
          'english',
          'religion',
          'commerce',
          'geography',
          'art',
          'citizen_education',
          'tamil',
          'hindi',
          'western_music',
          'estern_music',
          'art',
          'dancing',
          'drama',
          'english_literature',
          'sinhala_literature',
        ];
      }

      else{
        return [
          'mathematics',
          'sinhala',
          'science',
          'history',
          'english',
          'tamil',
          'geography',
          'citizen education',
          'health',
          'pts',
          'religion',
        ];
      }
   }

   getAllSubjects(){
     return [
      'combine_mathematics','chemistry','english',
      'biology','physics', 'agriculture',
      'economics', 'roman_civilization', 'home_economics', 'divinity', 'ict','statistics', 
      'political_science','art','french','accounts','geography','logic','sinhala','hindi',
      'mathematics','science','history','religion','commerce','citizen_education','tamil',
      'hindi','western_music','estern_music','dancing','drama','english_literature','sinhala_literature','economics',
      'science_for_teachnology','engineering_tech','bio_system_tech','informaticon_tehnology','accounting',
     ];
   }
}
