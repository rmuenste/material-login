import { Injectable } from '@angular/core';
import { AuthData } from './auth-data';
import { User } from './user';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const signupUrl = "http://localhost:5001/api/auth/signup/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();

  private user: User;

  constructor(private router: Router, private http: HttpClient) { }

  registerUser(authData: AuthData): Observable<any> {
    this.user = {
      email: authData.email,
      password: authData.password
    };

    let userData = {...this.user};
    return this.http.post(signupUrl, userData);
  }

  authSuccessful() {
    this.authChange.next(true);
    this.router.navigate(['/profile']);
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      password: authData.password
    };

    this.authChange.next(true);
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth(): boolean {
    return this.user != null;
  }

}
