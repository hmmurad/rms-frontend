import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';
import { ClassService } from '../shared/services/class.service';
import { StudentService } from '../shared/services/student.service';
import { DepartmentService } from '../shared/services/department.service';
import { SubjectService } from '../shared/services/subject.service';
import { ExamService } from '../shared/services/exam.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AddMarksModalComponent } from '../add-marks-modal/add-marks-modal.component';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.scss']
})
export class AddMarksComponent implements OnInit {
  class: any
  department: any
  students: any
  subjects: any
  teacherId: any = 1
  selectedDepartmentId: any
  selectedClassId: any
  selectedSubjectId: any
  exams: any

  constructor(
    private marksService: MarksService,
    private classService: ClassService,
    private studentService: StudentService,
    private departmentService: DepartmentService,
    private subjectService: SubjectService,
    private examService: ExamService,
    private matDialog: MatDialog

  ) { }
  ngOnInit(): void {
    this.getDepartment()
    this.getExams()

    this.subjectService.getSubjectByTeacherId(this.teacherId).subscribe(
      res => {
        this.subjects = res
        console.log(res)
      }
    )

  }

  getExams() {
    this.examService.getAll().subscribe(
      res => this.exams = res
    )
  }



  getDepartment() {
    this.departmentService.getAll().subscribe(
      res => this.department = res
    )
  }

  getClassByDepartment(departmentId: any) {
    this.classService.getClassByDepartment(departmentId).subscribe(
      res => this.class = res
    )
  }

  getStudentsByClass(classId: any) {
    this.studentService.getStdByClassId(classId).subscribe(
      res => {
        this.students = res
        console.log(res);

      }
    )
  }

  onchangeDepartment(event: Event) {
    this.selectedDepartmentId = (event.target as HTMLSelectElement).value
    this.getClassByDepartment(this.selectedDepartmentId)
  }
  onchangeClass(event: Event) {
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getStudentsByClass(this.selectedClassId)
  }

  edit(s: any) { }
  view(s: any) {
    this.matDialog.open(AddMarksModalComponent, {
      width: '80%',
      data: s
    })
  }
  delete(s: any) { }




}
