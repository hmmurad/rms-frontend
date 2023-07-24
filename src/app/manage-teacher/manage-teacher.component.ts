


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { TeacherService } from '../shared/services/teacher.service';
import { Teacher } from '../shared/models/teacher';
import { MatDialog } from '@angular/material/dialog';
import { TeacherProfileComponent } from '../teacher-profile/teacher-profile.component';
import { ViewProfileModalComponent } from '../view-profile-modal/view-profile-modal.component';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss']
})
export class ManageTeacherComponent implements OnInit {

  teachers: any[] = []

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.teacherService.getAll().subscribe((res) => {
      this.teachers = res
      console.log(res);

    })
  }

  onEdit(data: Teacher) {
    this.router.navigate(['edit-teacher', data.id])
  }

  delete(data: any) {
    this.teacherService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAll()
    })
  }


}


