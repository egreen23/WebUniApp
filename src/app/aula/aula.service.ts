import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Calendario} from '../model/calendario';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Aula} from '../model/aula';

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
export class AulaService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aula[]> {
    const url = `${this.urlServer}/aula/findAll`;
    return this.http.get<Aula[]>(url, httpOptions);

  }

  getAulabyId(id: number): Observable<Aula> {
    const url = `${this.urlServer}/aula/getById/${id}`;
    return this.http.get<Aula>(url, httpOptions);
  }

  updateAula(room: Aula): Observable<Aula> {
    const url = `${this.urlServer}/aula/updateAulaById/${room.idAula}`;
    return this.http.post<Aula>(url, room, httpOptions);
  }
}
