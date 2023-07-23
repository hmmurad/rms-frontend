import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';
import { StudentService } from '../shared/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMarksModalComponent } from '../add-marks-modal/add-marks-modal.component';
import { EditMarksModalComponent } from '../edit-marks-modal/edit-marks-modal.component';
import { ClassService } from '../shared/services/class.service';
import { SubjectService } from '../shared/services/subject.service';

@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss']
})
export class ManageMarksComponent implements OnInit {

  selectedClassId: any;
  selectedSubjectId: any;
  marks: any
  classes$ = this.classService.getAll()
  subjects$ = this.subjectService.getAll()
  totalMarks: any[] = []
  constructor(private marksService: MarksService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private matdialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllMarks()

  }
  getAllMarks() {
    this.marksService.getAll().subscribe(
      res => {
        for (let index = 0; index < res.length; ++index) {
          this.totalMarks[index] = res[index].attendance + res[index].assignment + res[index].tutorial + res[index].written;
        }
        this.marks = res
      }
    )
  }
  onEdit(s: any) {
    this.matdialog.open(EditMarksModalComponent, {
      width: '80%',
      data: s
    })
  }
  delete(s: any) { }

  onchangeClass(event: Event) {
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getMarksClassId(this.selectedClassId)
  }
  onchangeSub(event: Event) {
    this.selectedSubjectId = (event.target as HTMLSelectElement).value
    // this.getMarksByClassIdAndSubjectId(this.selectedClassId, this.selectedSubjectId)
    this.getMarksSubjectId(this.selectedSubjectId)
  }
  showall() {
    this.getAllMarks()
  }

  getMarksClassId(classId: any) {
    this.marksService.getMarksByClassId(classId).subscribe(
      res => this.marks = res
    )
  }
  getMarksSubjectId(subjectId: any) {
    this.marksService.getMarksBySubjectId(subjectId).subscribe(
      res => this.marks = res
    )
  }

  getMarksByClassIdAndSubjectId(classId: any, subjectId: any) {
    this.marksService.getMarksByClassIdAndSubjectId(classId, subjectId).subscribe(
      res => {
        this.marks = res
      }
    )
  }

  filter() {
    this.getMarksByClassIdAndSubjectId(this.selectedClassId, this.selectedSubjectId)
  }



}
