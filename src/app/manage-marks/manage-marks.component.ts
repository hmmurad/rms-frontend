import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';
import { StudentService } from '../shared/services/student.service';

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
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAll()
    this.marksService.getMarksByStudentIdAndClassId(3, 4).subscribe(
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


  onEdit(s: any) { }
  delete(s: any) { }

}
