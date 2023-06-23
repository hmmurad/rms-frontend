import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { BehaviorSubject } from 'rxjs';
import { ClassService } from '../shared/services/class.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {

  selectedStdId: any;
  students: any
  classes$ = this.classService.getAll()

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getByClassId(id: number) {
    this.studentService.getStdByClassId(id).subscribe(
      res => {
        this.students = res
      }
    )
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

  onchangeClass(event: Event) {
    console.log((event.target as HTMLSelectElement).value);
    this.selectedStdId = (event.target as HTMLSelectElement).value
    this.getByClassId(this.selectedStdId)
  }
}


