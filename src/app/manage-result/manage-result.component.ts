

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { ResultService } from '../shared/services/result.service';
import { MarksService } from '../shared/services/marks.service';
import { ClassService } from '../shared/services/class.service';
import { ExamService } from '../shared/services/exam.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewResultModalComponent } from '../view-result-modal/view-result-modal.component';

@Component({
  selector: 'app-manage-result',
  templateUrl: './manage-result.component.html',
  styleUrls: ['./manage-result.component.scss']
})
export class ManageResultComponent implements OnInit {

  students: Student[] = []
  exams: any
  classes: any
  className: any
  selectedClassId: any
  selectedExamId: any

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClasses()
  }



  getClasses() {
    this.classService.getAll().subscribe(
      res => {
        this.classes = res
      }
    )
  }

  getStudentsByClass(classId: any) {
    this.studentService.getStdByClassId(classId).subscribe(
      res => {
        this.students = res

      }
    )
  }
  // onchangeExam(event: Event) {
  //   this.selectedExamId = (event.target as HTMLSelectElement).value
  //   this.getMarksByExamId(this.selectedExamId)
  // }

  onchangeClasses(event: Event) {
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getStudentsByClass(this.selectedClassId)
  }


  onEdit(data: Student) {
    this.router.navigate(['edit-student', data.id])
  }

  delete(data: any) {
    this.studentService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      // console.log(res);
      // this.getStudentsByClass()
    })
  }

  view(s: Student) {
    this.matDialog.open(ViewResultModalComponent, {
      data: s,
      width: '80%'
    })

  }
}


