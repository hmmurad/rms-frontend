import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DepartmentService } from '../shared/services/department.service';
import { ClassService } from '../shared/services/class.service';
import { SubjectService } from '../shared/services/subject.service';
import { MarksService } from '../shared/services/marks.service';
import { customAttendance, customTutorial, customWritten } from './../shared/custom-validators/marks.validator'

@Component({
  selector: 'app-add-marks-modal',
  templateUrl: './add-marks-modal.component.html',
  styleUrls: ['./add-marks-modal.component.scss'],
  // standalone: true,
  // imports: [MatDialogModule, NgIf],
})
export class AddMarksModalComponent implements OnInit {

  form!: FormGroup;
  department: any
  class: any
  subject: any


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private marksService: MarksService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.initForm()
    this.getDepartment()
    this.getclass()
    this.getSubject()
  }

  getDepartment() {
    this.departmentService.getById(this.data.departmentId).subscribe(
      res => this.department = res.departmentname
    )
  }
  getclass() {
    this.classService.getClassById(this.data.classId).subscribe(
      res => this.class = res.classname
    )
  }
  getSubject() {
    this.subjectService.getSubjectById(this.data.subjectId).subscribe(
      res => this.subject = res.subjectname
    )
  }

  initForm() {
    this.form = this.fb.group({
      studentId: [+this.data.id],
      userId: [this.data.userId],
      classId: [this.data.classId],
      examId: [this.data.examId],
      subjectId: [this.data.subjectId],
      attendance: [, [Validators.required, customAttendance]],
      tutorial: [, [Validators.required, customTutorial]],
      assignment: [, [Validators.required, customTutorial]],
      written: [, [Validators.required, customWritten]],
    })
  }

  get attendance() {
    return this.form.controls['attendance']
  }
  get tutorial() {
    return this.form.controls['tutorial']
  }
  get assignment() {
    return this.form.controls['assignment']
  }
  get written() {
    return this.form.controls['written']
  }

  onsubmit() {
    console.log(this.form);
    this.marksService.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err.error.message);

      },
    })
  }



}
