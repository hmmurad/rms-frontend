



import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SubjectService } from '../shared/services/subject.service';
import { Department } from '../shared/models/department';
import { DepartmentService } from '../shared/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {


  addForm!: FormGroup
  editMode: boolean = false;
  department!: Department
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private location: Location) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.queryParams['id']
    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.get()

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
    // console.log(this.addClassForm.controls['classname'].setValue(this.class.classname));
  }

  initForm() {
    if (this.editMode) {
      this.addForm.controls['departmentname'].setValue(this.department.departmentname)
    } else {
      this.addForm = this.fb.group({
        departmentname: [],
      })
    }
  }

  get() {
    if (this.id !== undefined || null) {
      this.departmentService.getById(this.id).subscribe(
        (res) => {
          console.log(res);
          this.department = res
          this.editMode = true
          this.addForm.controls['departmentname'].setValue(this.department.departmentname)
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
    this.departmentService.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }


  update() {
    this.departmentService.update(this.id, this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }

  cancel() {
    this.location.back()
  }
}



