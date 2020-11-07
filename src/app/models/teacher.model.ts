export class TermResults{
    year = new Date().getFullYear();
    term = 1;
    studentid: string;
    grade: string;
    result: [{
        subjectSubjectid: number,
        marks: number
        }
    ];
}