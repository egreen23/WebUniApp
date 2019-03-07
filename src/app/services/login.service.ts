import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {AppSettings} from '../app-settings';
import {UserService} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlServer: string = AppSettings.URL_Server;
  constructor(private http: HttpClient) { }

  login(idMatricola: number, password: string): Observable<User> {
    const url = `${this.urlServer}/seg/logSegreteria/${idMatricola}/${password}`;
    return this.http.post<User>(url, httpOptions);


  }

  /*change(user: User): void {
    this.data.changeUser(user);
  }*/

}
