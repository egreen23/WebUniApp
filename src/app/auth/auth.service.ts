import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {UserDTO} from '../dto/userDTO';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;

  public isLoggedInDoc = false;

  public isLoggedInSeg = false;



  // store the URL so we can redirect after logging in
  redirectUrl: string;

  private urlServer: string = AppSettings.URL_Server;



//  constructor ( public logService: LoginService) {}

  constructor (private http: HttpClient) {}


  login(mat: number, psw: string): Observable<UserDTO> {
    const url = `${this.urlServer}/user/login/${mat}/${psw}`;
    return this.http.post<UserDTO>(url, null, httpOptions).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.isLoggedIn = true;
        }

        return user;
      })
    );

  }

  logout(): void {
    this.isLoggedIn = false;
    this.isLoggedInSeg = false;
    this.isLoggedInDoc = false;

  }


}
