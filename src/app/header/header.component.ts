import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showBtn = false;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.loggedUser.subscribe(
      res => {
        console.log(res);

      }
    )

  }


  onClick() {
    // this.showBtn = !this.showBtn

    document.querySelector('#submenu')?.classList.toggle('hidden')

  }
  logout() {
    console.log('logout');

  }
}
