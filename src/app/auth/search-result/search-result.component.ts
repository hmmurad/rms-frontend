import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassService } from 'src/app/shared/services/class.service';
import { ExamService } from 'src/app/shared/services/exam.service';
import { MarksService } from 'src/app/shared/services/marks.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { ShowResultComponent } from 'src/app/show-result/show-result.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  form!: FormGroup
  classes$ = this.classService.getAll()
  exams$ = this.examService.getAll()

  selectedExam: any
  selectedClass: any

  constructor(
    private classService: ClassService,
    private examService: ExamService,
    private marksService: MarksService,
    private matDialog: MatDialog
  ) {

  }

  ngOnInit(): void {


    this.form = new FormGroup({
      id: new FormControl("", [Validators.required]),
      classId: new FormControl("", [Validators.required]),
      examId: new FormControl("", [Validators.required])
    })
  }

  get id() {
    return this.form.controls['id']
  }
  get classId() {
    return this.form.controls['classId']
  }
  get examId() {
    return this.form.controls['examId']
  }


  search() {
    console.log(this.form.value);

    const { id, classId, examId } = this.form.value
    this.marksService.getMarksByStudentIdAndClassIdExamId(id, classId, examId).subscribe(
      res => {
        this.matDialog.open(ShowResultComponent, {
          width: '80%',
          data: res
        })
        console.log(res);
        this.form.reset()

      }
    )

  }
}
