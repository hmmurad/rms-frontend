
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Class } from '../shared/models/class';
import { ClassService } from '../shared/services/class.service';
import { DepartmentService } from '../shared/services/department.service';
import { Department } from '../shared/models/department';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {


  addForm!: FormGroup
  editMode: boolean = false;
  session!: any
  departments$ = this.deptService.getAll()
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sessionSerice: SessionService,
    private deptService: DepartmentService,
    private location: Location) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.queryParams['id']

    

    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  

    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
    // console.log(this.addClassForm.controls['classname'].setValue(this.class.classname));
  }

  initForm() {
    if (this.editMode) {
      this.addForm.controls['year'].setValue(this.session.year)
    } else {
      this.addForm = this.fb.group({
        year: []
      })
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
    this.sessionSerice.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }


  updateClass() {
    this.sessionSerice.update(this.id, this.addForm.value).subscribe((res) => {
      console.log(res);
      this.addForm.reset()
    })
  }

  cancel() {
    this.location.back()
  }



}
