import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';

@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss']
})
export class ManageMarksComponent implements OnInit {

  marks: any
  totalMarks: any
  constructor(private marksService: MarksService) { }

  ngOnInit(): void {
    this.getAll()

  }

  getAll() {
    this.marksService.getAll().subscribe(
      res => {
        this.marks = res
        for (let index = 0; index < res.length; index++) {
          this.totalMarks = res[index].attendance + res[index].assignment + res[index].tutorial + res[index].written;

        }
        console.log(this.totalMarks);
      }
    )
  }

  onEdit(s: any) { }
  delete(s: any) { }

}
