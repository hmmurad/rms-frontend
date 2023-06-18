

import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';
import { SubjectService } from '../shared/services/subject.service';
import { Subject } from '../shared/models/subject';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {

  selectedClassId: any;
  filteredSubjects: any;
  subjects: any;

  classes$ = this.classService.getAll()


  constructor(
    private subjectService: SubjectService,
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllSubjects()
  }

  getAllSubjects() {
    this.subjectService.getAll().subscribe((res) => {
      this.subjects = res
      console.log(res);
    })
  }
  getByClassId(classId?: any) {
    this.subjectService.getSubjectByClassId(classId).subscribe((res) => {
      this.subjects = res
      console.log(res);
    })
  }

  onEdit(data: Subject) {
    this.router.navigate(['edit-subject', data.id])
  }

  delete(data: any) {
    this.subjectService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAllSubjects()
    })
  }

  onchangeClass(event: Event) {
    console.log((event.target as HTMLSelectElement).value);
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getByClassId(this.selectedClassId)
  }
}

