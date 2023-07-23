import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { UserStoreService } from '../auth/user.store.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewProfileModalComponent } from '../view-profile-modal/view-profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showBtn = false;
  user: any;

  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService,
    private matDialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.authService.getUserFromStore().subscribe(
      res => {
        const userFromAuth = this.authService.getUserFromToken().user
        this.user = res || userFromAuth
        // console.log(this.user);
      }
    )
  }

  openProfile(data: any) {
    console.log(data);
    this.matDialog.open(ViewProfileModalComponent, {
      width: '70%',
      data: data
    })
  }


  onClick() {
    document.querySelector('#submenu')?.classList.toggle('hidden')
  }
  logout() {
    this.authService.logout()
  }
}
