
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksService } from '../shared/services/marks.service';
import { SubjectService } from '../shared/services/subject.service';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  IMarks: any
  totalMarks: any[] = [];
  grandTotal: any = 0
  averageMarks: any
  gradePoint: any = 'F'
  subject: any[] = []
  student: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
    private subjectService: SubjectService
  ) {

  }

  ngOnInit(): void {


    console.log(this.data[0].studentId);
    this.studentService.getById(this.data[0].studentId).subscribe(
      res => {
        console.log(res);
        this.student = res

      }
    )
    for (let index = 0; index < this.data.length; index++) {
      this.totalMarks[index] = this.data[index].attendance + this.data[index].tutorial + this.data[index].assignment + this.data[index].written;
      this.getSubById(this.data[index].subjectId, index)
      this.grandTotal += this.totalMarks[index]
    }


    this.IMarks = this.data
    this.averageMarks = Number(this.grandTotal / this.data.length).toFixed(2)
    this.grading(this.averageMarks)
  }

  getSubById(id: any, index: number) {
    this.subjectService.getSubjectById(id).subscribe(
      res => this.subject[index] = res.subjectname
    )
  }

  grading(marks: any) {
    if (marks > 90) {
      this.gradePoint = 'A+'
    }
    if (marks > 80) {
      this.gradePoint = 'A'
    }

    if (marks > 70) {
      this.gradePoint = 'B+'
    }
    if (marks > 60) {
      this.gradePoint = 'B+'
    }
    if (marks > 50) {
      this.gradePoint = 'B'
    }

  }





}
