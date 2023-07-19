import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';
import { StudentService } from '../shared/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMarksModalComponent } from '../add-marks-modal/add-marks-modal.component';
import { EditMarksModalComponent } from '../edit-marks-modal/edit-marks-modal.component';
import { ClassService } from '../shared/services/class.service';

@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss']
})
export class ManageMarksComponent implements OnInit {

  selectedClassId: any;
  marks: any
  classes$ = this.classService.getAll()
  totalMarks: any[] = []
  constructor(private marksService: MarksService,
    private classService: ClassService,
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

  onchange(event: Event) {
    this.selectedClassId = (event.target as HTMLSelectElement).value
    this.getMarksByClassId(this.selectedClassId)
  }
  showall() {
    this.getAllMarks()
  }



  getMarksByClassId(classId: any) {
    this.marksService.getMarksByClassId(classId).subscribe(
      res => {
        this.marks = res
      }
    )
  }



}
