


import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { SubjectService } from '../shared/services/subject.service';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {



  student!: Student
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private location: Location) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.get()
  }

  get() {
    if (this.id !== undefined || null) {
      this.studentService.getById(this.id).subscribe(
        (res) => {
          console.log(res);
          this.student = res
        }
      )
    }
  }

  onEdit(data: Student) {
    this.router.navigate(['edit-student', data.id])
  }

  cancel() {
    this.location.back()
  }

}

