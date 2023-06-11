import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth.model';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {
    email: '',
    password: ''
  }

  authState$ = new BehaviorSubject<boolean>(false)
  user$ = new BehaviorSubject<User>(this.user)

  constructor(private http: HttpClient) { }


  signup(user: User) {
    return this.http.post(`http://localhost:3000/auth/signup`, user)
  }
  signin(user: User) {
    return this.http.post<any>(`http://localhost:3000/auth/signin`, user, { withCredentials: true })
      .pipe(
        tap(value => {
          if (value.success) {
            this.authState$.next(true)
            this.user$.next(value.user)
          } else {
            this.authState$.next(false)

          }
        })
      )
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/auth/auth-status`)
  }
}
