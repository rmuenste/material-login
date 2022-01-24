import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './auth/user';

const signupUrl = "http://localhost:5001/api/auth/signup/";

//interface User {
//  email: string;
//  password: string;
//}

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) {

  }

  signupUser(userData: User): Observable<any> {
    return this.http.post(signupUrl, userData);
  }

}
