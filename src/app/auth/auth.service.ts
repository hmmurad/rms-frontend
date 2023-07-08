import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, LoginUser, UserResponse, Role } from './auth.model';

import { switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {
    email: '',
    fullname: '',
  }
  private user$ = new BehaviorSubject<User>(this.user);

  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) { }

  get loggedUser () {
    return this.user$.asObservable()
  }

  get isUserLoggedIn(): Observable<boolean> {
    return this.user$.asObservable().pipe(
      switchMap((user: User) => {
        const isUserAuthenticated = user !== null;
        return of(isUserAuthenticated);
      })
    );
  }

  get userRole(): Observable<Role | undefined> {
    return this.user$.asObservable().pipe(
      switchMap((user: User) => {
        return of(user?.roles); // for after signed out, but still subscribed
      })
    );
  }


  signup(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/auth/signup`, user)
  }

  signin(loginUser: LoginUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`http://localhost:3000/auth/signin`, loginUser, this.httpOptions)
      .pipe(
        take(1),
        tap((response: { token: string }) => {
          localStorage.setItem('token', response.token)
          const decodedUser: UserResponse = jwtDecode(response.token)
          this.user$.next(decodedUser.user)
        })
      )
  }

  isTokenInStorage(): any {
    const token = localStorage.getItem('token')!
    const decodedRes: UserResponse = jwtDecode(token);
    const jwtExpirationInMsSinceUnixEpoch = decodedRes.exp * 1000;
    const isExpired =
      new Date() > new Date(jwtExpirationInMsSinceUnixEpoch);

    if (isExpired) return null;
    if (decodedRes.user) {
      this.user$.next(decodedRes.user);
      return true;
    }
  }

  logout(): void {
    this.user$.next(this.user);
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth/signin');
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/auth/auth-status`)
  }
}
