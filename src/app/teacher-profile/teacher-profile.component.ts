import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../shared/services/teacher.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {

  teacher: any
  id: any
  form!: FormGroup


  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      res => {
        this.id = res['id']
        this.getTeacher(this.id)
      }
    )

    this.form = new FormGroup({
      fullname: new FormControl(""),
      email: new FormControl(""),
      roles: new FormControl(""),
    })

  }


  getTeacher(id: any) {
    this.teacherService.getById(id).subscribe(
      res => {
        this.teacher = res
        console.log(res);
        this.form.controls['fullname'].setValue(this.teacher.fullname)
        this.form.controls['email'].setValue(this.teacher.email)

      }
    )
  }

  update() {
    console.log(this.form.value);

    // this.teacherService.update(this.id, this.form.value).subscribe(
    //   res => {
    //     console.log(res);

    //   }
    // )
  }

  cancel() {
    this.location.back()
  }

}
