
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';
import { ExamService } from '../shared/services/exam.service';

@Component({
  selector: 'app-manage-exam',
  templateUrl: './manage-exam.component.html',
  styleUrls: ['./manage-exam.component.scss']
})
export class ManageExamComponent implements OnInit {

  exams: any

  constructor(
    private examService: ExamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllExams()
  }

  getAllExams() {
    this.examService.getAll().subscribe((res) => {
      this.exams = res
    })
  }

  onEditClass(data: any) {
    this.router.navigate(['edit-exam', data.id])
  }

  delete(data: any) {
    this.examService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAllExams()
    })
  }
}
