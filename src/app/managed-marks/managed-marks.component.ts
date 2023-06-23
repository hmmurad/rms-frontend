import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/services/marks.service';

@Component({
  selector: 'app-managed-marks',
  templateUrl: './managed-marks.component.html',
  styleUrls: ['./managed-marks.component.scss']
})
export class ManagedMarksComponent implements OnInit {

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
