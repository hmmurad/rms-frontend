import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss']
})
export class ManageClassComponent implements OnInit {

  classes: Class[] = []

  constructor(
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllClasses()
  }

  getAllClasses() {
    this.classService.getAll().subscribe((res) => {
      this.classes = res
    })
  }

  onEditClass(data: Class) {
    this.router.navigate(['add-class', data.id])
  }

  delete(data: any) {
    this.classService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAllClasses()
    })
  }
}
