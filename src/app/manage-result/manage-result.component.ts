

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-manage-result',
  templateUrl: './manage-result.component.html',
  styleUrls: ['./manage-result.component.scss']
})
export class ManageResultComponent implements OnInit {

  students: Student[] = []

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.studentService.getAll().subscribe((res) => {
      this.students = res
      console.log(res);

    })
  }

  onEdit(data: Student) {
    this.router.navigate(['edit-student', data.id])
  }

  delete(data: any) {
    this.studentService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAll()
    })
  }

  view(s: Student) {
    this.router.navigate(['student', s.id])
    console.log(s);

  }
}


