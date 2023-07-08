

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../shared/models/subject';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { ResultService } from '../shared/services/result.service';
import { MarksService } from '../shared/services/marks.service';
import { ClassService } from '../shared/services/class.service';
import { ExamService } from '../shared/services/exam.service';

@Component({
  selector: 'app-manage-result',
  templateUrl: './manage-result.component.html',
  styleUrls: ['./manage-result.component.scss']
})
export class ManageResultComponent implements OnInit {

  students: Student[] = []
  exams: any
  classes: any
  selectedClassId: any
  selectedExamId: any

  constructor(
    private studentService: StudentService,
    private resultService: ResultService,
    private marksService: MarksService,
    private classService: ClassService,
    private examService: ExamService,


    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllMarks()
    this.getAll()
    this.getClasses()
    this.getExams()
  }

  getAll() {
    this.studentService.getAll().subscribe((res) => {
      this.students = res
      // console.log(res);

    })
  }

  getExams() {
    this.examService.getAll().subscribe(
      res => {
        this.exams = res
      }
    )
  }
  getClasses() {
    this.classService.getAll().subscribe(
      res => {
        this.classes = res
      }
    )
  }

  getAllMarks() {
    this.marksService.getAll().subscribe(
      res => {
        console.log(res);

      }
    )
  }

  getMarksByClassId(classId?: any) {
    this.marksService.getMarksByClassId(classId).subscribe(
      res => {
        console.log(res);

      }
    )
  }
  getMarksByExamId(examId?: any) {
    this.marksService.getMarksByExamId(examId).subscribe(
      res => {
        console.log(res);

      }
    )
  }

  onchangeExam(event: Event) {
    this.selectedExamId = (event.target as HTMLSelectElement).value
    this.getMarksByExamId(this.selectedExamId)
  }

  onchangeClasses(event: Event) {
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getMarksByClassId(this.selectedClassId)
  }


  onEdit(data: Student) {
    this.router.navigate(['edit-student', data.id])
  }

  delete(data: any) {
    this.studentService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      // console.log(res);
      this.getAll()
    })
  }

  view(s: Student) {
    this.router.navigate(['student', s.id])
    // console.log(s);

  }
}


