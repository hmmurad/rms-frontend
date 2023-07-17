import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { SubjectService } from '../shared/services/subject.service';
import { DepartmentService } from '../shared/services/department.service';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  numberOfClass: any
  class$ = this.classService.getAll()
  sub$ = this.sub.getAll()
  dept$ = this.dept.getAll()
  std$ = this.std.getAll()

  constructor(
    private classService: ClassService,
    private sub: SubjectService,
    private dept: DepartmentService,
    private std: StudentService,
  ) { }


  ngOnInit(): void {

  }

}
