import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksService } from '../shared/services/marks.service';
import { SubjectService } from '../shared/services/subject.service';

@Component({
  selector: 'app-view-result-modal',
  templateUrl: './view-result-modal.component.html',
  styleUrls: ['./view-result-modal.component.scss']
})
export class ViewResultModalComponent implements OnInit {

  IMarks: any
  totalMarks: any[] = [];
  grandTotal: any = 0
  averageMarks: any
  gradePoint: any = 'F'
  subject: any[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private markService: MarksService,
    private subjectService: SubjectService
  ) {

  }

  ngOnInit(): void {
    console.log(this.data);
    this.markService.getMarksByStudentId(this.data.id).subscribe(
      (res: any) => {
        console.log(res);

        for (let index = 0; index < res.length; index++) {
          this.totalMarks[index] = res[index].attendance + res[index].tutorial + res[index].assignment + res[index].written;
          this.getSubById(res[index].subjectId, index)
          this.grandTotal += this.totalMarks[index]
        }
        this.IMarks = res
        this.averageMarks = Number(this.grandTotal / res.length).toFixed(2)
        this.grading(this.averageMarks)
      }
    )
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
