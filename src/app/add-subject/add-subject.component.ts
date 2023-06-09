

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { SubjectService } from '../shared/services/subject.service';
import { ClassService } from '../shared/services/class.service';
import { TeacherService } from '../shared/services/teacher.service';
import { Teacher } from '../shared/models/teacher';
import { Class } from '../shared/models/class';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {


  addForm!: FormGroup
  editMode: boolean = false;
  subject!: Subject
  teachers$ = this.teacherService.getAll()
  class$ = this.classService.getAll()
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private classService: ClassService,
    private teacherService: TeacherService,
    private location: Location) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.queryParams['id']
    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.getSubject()

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
    // console.log(this.addClassForm.controls['classname'].setValue(this.class.classname));
  }

  initForm() {
    if (this.editMode) {
      this.addForm.controls['classname'].setValue(this.subject.subjectname)
    } else {
      this.addForm = this.fb.group({
        subjectname: [],
        classId: [],
        teacherId: []
      })
    }
  }

  getSubject() {
    if (this.id !== undefined || null) {
      this.subjectService.getSubjectById(this.id).subscribe(
        (res) => {
          console.log(res);
          this.subject = res
          this.editMode = true
          this.addForm.controls['subjectname'].setValue(this.subject.subjectname)
          this.addForm.controls['classId'].setValue(this.subject.classId)
          this.addForm.controls['teacherId'].setValue(this.subject.teacherId)
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
    console.log(this.addForm.value);

    this.subjectService.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }


  update() {
    this.subjectService.update(this.id, this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }

  cancel() {
    this.location.back()
  }



}
