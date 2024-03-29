

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Class } from '../shared/models/class';
import { ClassService } from '../shared/services/class.service';
import { DepartmentService } from '../shared/services/department.service';
import { Department } from '../shared/models/department';
import { ExamService } from '../shared/services/exam.service';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {


  addForm!: FormGroup
  editMode: boolean = false;
  exams!: any
  sessions$: any = this.sessionService.getAll()
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private examService: ExamService,
    private sessionService: SessionService,
    private location: Location) { }

  ngOnInit(): void {
    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.getExams()

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }

  }

  initForm() {
    if (this.editMode) {
      this.addForm.controls['examname'].setValue(this.exams.examname)
    } else {
      this.addForm = this.fb.group({
        examname: [],
        sessionId: []
      })
    }
  }

  getExams() {
    if (this.id !== undefined || null) {
      this.examService.get(this.id).subscribe(
        (res) => {
          console.log(res);
          this.exams = res
          this.editMode = true
          this.addForm.controls['examname'].setValue(this.exams.examname)
          this.addForm.controls['sessionId'].setValue(this.exams.sessionId)
        }
      )
    }
  }

  save() {
    if (this.editMode) {
      this.update()
    } else {
      this.create()
    }
  }

  create() {
    this.examService.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }


  update() {
    this.examService.update(this.id, this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }

  cancel() {
    this.location.back()
  }



}

