import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Calendario} from '../model/calendario';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'

  })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) { }

  getCalendari(): Observable<Calendario[]> {
    const url = `${this.urlServer}/cal/findAll`;
    return this.http.get<Calendario[]>(url, httpOptions);

  }

  getCalendariobyId(): Observable<Calendario> {
    const url = `${this.urlServer}/cal/findAll`;
    return this.http.get<Calendario>(url, httpOptions);

  }
}
