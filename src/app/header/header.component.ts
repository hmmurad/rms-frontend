import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { UserStoreService } from '../auth/user.store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showBtn = false;
  user: any;

  constructor(private authService: AuthService, private userStoreService: UserStoreService) { }


  ngOnInit(): void {
    this.authService.getUserFromStore().subscribe(
      res => {
        const userFromAuth = this.authService.getUserFromToken().user
        this.user = res || userFromAuth
        // console.log(this.user);
      }
    )
  }


  onClick() {
    document.querySelector('#submenu')?.classList.toggle('hidden')
  }
  logout() {
    this.authService.logout()
  }
}
