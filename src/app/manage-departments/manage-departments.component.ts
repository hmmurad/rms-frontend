



import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';
import { SubjectService } from '../shared/services/subject.service';
import { Subject } from '../shared/models/subject';
import { Department } from '../shared/models/department';
import { DepartmentService } from '../shared/services/department.service';

@Component({
  selector: 'app-manage-departments',
  templateUrl: './manage-departments.component.html',
  styleUrls: ['./manage-departments.component.scss']
})
export class ManageDepartmentsComponent implements OnInit {

  departments: Department[] = []

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.departmentService.getAll().subscribe((res) => {
      this.departments = res
      console.log(res);
    })
  }

  onEdit(data: Department) {
    this.router.navigate(['edit-department', data.id])
  }

  delete(data: any) {
    this.departmentService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAll()
    })
  }
}


