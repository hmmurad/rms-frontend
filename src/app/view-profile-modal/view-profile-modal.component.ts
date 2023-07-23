


import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksService } from '../shared/services/marks.service';
import { SubjectService } from '../shared/services/subject.service';
import { StudentService } from '../shared/services/student.service';
import { TeacherService } from '../shared/services/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-profile-modal',
  templateUrl: './view-profile-modal.component.html',
  styleUrls: ['./view-profile-modal.component.scss']
})
export class ViewProfileModalComponent implements OnInit {

  user: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private teacherService: TeacherService,
    private toaster: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.teacherService.getById(this.data.id).subscribe(
      res => {
        this.user = res
      },
      (err) => {
        this.toaster.warning(err.error.message, err.name)
      }
    )


  }





}
