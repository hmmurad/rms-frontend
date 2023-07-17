import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, LoginUser, UserResponse, Role } from './auth.model';

import { shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private userPayload: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken()
  }



  signup(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`http://localhost:3000/auth/signup`, user, this.httpOptions)
      .pipe(take(1))
  }

  signin(loginUser: LoginUser) {
    return this.http.post<any>(`http://localhost:3000/auth/signin`, loginUser, this.httpOptions)
      .pipe(
        take(1),
        tap((response: { token: string }) => {
          console.log(response);

        }),
      )
  }

  storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  decodeToken() {
    const jwtHelper = new JwtHelperService()
    const token = this.getToken()!
    return jwtHelper.decodeToken(token)
  }

  getUserFromToken() {
    if (this.userPayload) {
      return this.userPayload
    }
  }




  logout(): void {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth/login');
  }


}
