import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/auth.model';
import { UserStoreService } from '../auth/user.store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user!: User
  constructor(private authService: AuthService, private userStoreService: UserStoreService) { }

  ngOnInit(): void {
    this.userStoreService.getUserFromStore().subscribe(
      res => {
        const userFromAuth = this.authService.getUserFromToken().user
        this.user = res || userFromAuth
      }
    )
    this.userStoreService.getUserFromStore().subscribe(
      res => {
        const roles = this.authService.getUserFromToken().user.roles
        console.log(res, roles);

      }
    )




  }
}
