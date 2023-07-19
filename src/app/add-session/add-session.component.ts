
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Class } from '../shared/models/class';
import { ClassService } from '../shared/services/class.service';
import { DepartmentService } from '../shared/services/department.service';
import { Department } from '../shared/models/department';
import { SessionService } from '../shared/services/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {


  addForm!: FormGroup
  editMode: boolean = false;
  session!: any
  id!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router,
    private toaster: ToastrService,

    private location: Location) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.queryParams['id']


    this.initForm()
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.getSessionById(this.id)


    if (this.id) {
      this.editMode = true
    } else {
      this.editMode = false
    }
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

  getSessionById(id: any) {
    this.sessionService.get(id).subscribe(
      res => {
        this.session = res
        this.editMode = true
        this.addForm.controls['year'].setValue(this.session.year)
        console.log(res);
      },
      err => {
        this.toaster.error(err.error.message, 'Error')

      }
    )
  }


  saveClass() {
    if (this.editMode) {
      this.updateClass()
    } else {
      this.createSession()
    }
  }

  createSession() {
    this.sessionService.create(this.addForm.value).subscribe((res) => {
      console.log(res);
      this.toaster.success('Succesfully updated', 'Session')

      this.addForm.reset()
    })
  }


  updateClass() {
    this.sessionService.update(this.id, this.addForm.value).subscribe((res) => {
      this.toaster.success('Succesfully updated', 'Session')
      this.addForm.reset()
    },
      (err) => {
        this.toaster.error(err.error.message, 'Session')

      })
  }

  cancel() {
    // this.router.navigate(['../'])
    this.location.back()
  }



}
