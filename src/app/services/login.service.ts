import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {AppSettings} from '../app-settings';
import {UserService} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlServer: string = AppSettings.URL_Server;
  constructor(private http: HttpClient) { }

  login(idMatricola: number, password: string): Observable<User> {
    const url = `${this.urlServer}/user/isValidate/${idMatricola}/${password}`;
    return this.http.get<User>(url, httpOptions);


  }

  /*change(user: User): void {
    this.data.changeUser(user);
  }*/

}
