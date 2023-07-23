



import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { SubjectService } from '../shared/services/subject.service';
import { Department } from '../shared/models/department';
import { Class } from '../shared/models/class';
import { ClassService } from '../shared/services/class.service';
import { DepartmentService } from '../shared/services/department.service';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { SessionService } from '../shared/services/session.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  departments: Department[] = []
  sessions: any[] = []
  classes: Class[] = []
  addForm!: FormGroup
  editMode: boolean = false;
  student!: Student
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService, private classService: ClassService, private deptService: DepartmentService, private sessionService: SessionService,
    private location: Location) { }

  ngOnInit(): void {
    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })

    console.log(this.id);

    this.getStudentById(this.id)
    this.getAll()

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
  }

  getAll() {
    this.deptService.getAll().subscribe((res) => this.departments = res)
    this.classService.getAll().subscribe(res => this.classes = res)
    this.sessionService.getAll().subscribe((res) => this.sessions = res)
  }

  initForm() {
    this.addForm = this.fb.group({
      fullname: [],
      email: [],
      dob: [],
      gender: [],
      mobile: [],
      address: [],
      departmentId: [],
      classId: [],
      sessionId: [],
      status: ['']
    })

  }

  getStudentById(id: any) {
    if (this.editMode) {
      this.studentService.getById(id).subscribe(
        (res) => {
          console.log(res);
          this.student = res
          this.editMode = true
          this.addForm.controls['fullname'].setValue(this.student.fullname)
          this.addForm.controls['email'].setValue(this.student.email)
          this.addForm.controls['gender'].setValue(this.student.gender)
          this.addForm.controls['mobile'].setValue(this.student.mobile)
          this.addForm.controls['dob'].setValue(this.student.dob)
          this.addForm.controls['address'].setValue(this.student.address)
          this.addForm.controls['departmentId'].setValue(this.student.departmentId)
          this.addForm.controls['classId'].setValue(this.student.classId)
          this.addForm.controls['sessionId'].setValue(this.student.sessionId)
          this.addForm.controls['status'].setValue(this.student.status)
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
    this.studentService.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }


  update() {
    this.studentService.update(this.id, this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }

  cancel() {
    this.location.back()
  }



}

