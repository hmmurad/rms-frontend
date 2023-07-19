
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../shared/services/class.service';
import { Class } from '../shared/models/class';
import { Router } from '@angular/router';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-manage-session',
  templateUrl: './manage-session.component.html',
  styleUrls: ['./manage-session.component.scss']
})
export class ManageSessionComponent implements OnInit {

  sessions: any
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllClasses()
  }

  getAllClasses() {
    this.sessionService.getAll().subscribe((res) => {
      this.sessions = res
    })
  }

  onEditsession(data: any) {
    this.router.navigate(['edit-session', data.id])
  }

  delete(data: any) {
    this.sessionService.delete(data.id).subscribe((res: any) => {
      window.alert('Do you want to delete?')
      console.log(res);
      this.getAllClasses()
    })
  }
}

