import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss']
})
export class ManageClassComponent implements OnInit {

  classes: Class[] = []

  constructor(
    private classService: ClassService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllClasses()
  }

  getAllClasses() {
    this.classService.getAll().subscribe((res) => {
      this.classes = res
    },
      (err) => {
        console.log(err);

        this.toaster.warning('Token expired , Please login agian', err)
      })
  }

  onEditClass(data: Class) {
    this.router.navigate(['edit-class', data.id])
  }

  delete(data: any) {
    this.classService.delete(data.id).subscribe((res: any) => {
      this.toaster.success("Successfully deleted", res.message)
      this.getAllClasses()
    },
      err => {
        console.log(err);

      })
  }
}
