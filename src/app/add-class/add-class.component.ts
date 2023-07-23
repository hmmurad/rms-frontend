import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Class } from '../shared/models/class';
import { ClassService } from '../shared/services/class.service';
import { DepartmentService } from '../shared/services/department.service';
import { Department } from '../shared/models/department';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {


  addClassForm!: FormGroup
  editMode: boolean = false;
  class!: Class
  departments$ = this.deptService.getAll()
  id!: number
  message: any
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private classService: ClassService,
    private deptService: DepartmentService,
    private toaster: ToastrService,
    private location: Location) { }

  ngOnInit(): void {
    this.id = 3

    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.getClass()

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
    // console.log(this.addClassForm.controls['classname'].setValue(this.class.classname));
  }

  initForm() {
    if (this.editMode) {
      this.addClassForm.controls['classname'].setValue(this.class.classname)
    } else {
      this.addClassForm = this.fb.group({
        classname: [],
        departmentId: []
      })
    }

  }

  getClass() {
    if (this.id !== undefined || null) {
      this.classService.getClassById(this.id).subscribe(
        (res) => {
          console.log(res);
          this.class = res
          this.editMode = true
          this.addClassForm.controls['classname'].setValue(this.class.classname)
          this.addClassForm.controls['departmentId'].setValue(this.class.departmentId)
        }
      )
    }
  }

  saveClass() {
    if (this.editMode) {
      this.updateClass()
    } else {
      this.createClass()
    }
  }

  createClass() {
    console.log(this.addClassForm.value);

    this.classService.create(this.addClassForm.value).subscribe({
      next: (res) => {
        this.toaster.success('Class Added Successfully!', 'Success')
        this.addClassForm.reset()
      },
      error: (err) => {
        this.message = err.error.message

        for (let index = 0; index < err.error.message.length; index++) {
          this.toaster.info(err.error.message[index], 'Warning')
        }
      },
    })
  }


  updateClass() {
    this.classService.update(this.id, this.addClassForm.value).subscribe((res) => {
      console.log(res);
      this.addClassForm.reset()
      this.toaster.success('Class Updated Successfully!', 'Updated')
    },
      (err) => {
        this.toaster.info(err.error.message, 'Info')

      })
  }

  cancel() {
    this.location.back()
  }



}
