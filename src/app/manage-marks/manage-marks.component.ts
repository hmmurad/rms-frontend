import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';
import { StudentService } from '../shared/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMarksModalComponent } from '../add-marks-modal/add-marks-modal.component';
import { EditMarksModalComponent } from '../edit-marks-modal/edit-marks-modal.component';

@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss']
})
export class ManageMarksComponent implements OnInit {

  marks: any
  student: any
  totalMarks: any[] = []
  constructor(private marksService: MarksService,
    private studentService: StudentService,
    private matdialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.marksService.getMarksByStudentIdAndClassId(3, 4).subscribe(
      res => {
        console.log(res);
      }
    )

    this.marksService.getOneById(1).subscribe(
      res => {
        console.log(res);
      }
    )
  }



  getAll() {
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

}
