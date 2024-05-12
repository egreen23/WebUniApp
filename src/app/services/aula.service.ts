import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Aula} from '../domain/aula';
import {DocenteDTO} from '../dto/docenteDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) {}

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

  newAula(room: Aula): Observable<Aula> {
    const url = `${this.urlServer}/aula/newAula`;
    return this.http.post<Aula>(url, room, httpOptions);
  }

  deleteAula(id: number): Observable<{}> {
    const url = `${this.urlServer}/aula/deleteAula/${id}`;
    return this.http.delete(url, httpOptions);

  }

  deleteAllAule(aule: Aula[]): Observable<{}> {
    const url = `${this.urlServer}/aula/deleteAule`;
    let httpParams = new HttpParams();
    let num = 0;
    let i;
    for (i = num; i < aule.length ; i++) {
      httpParams = httpParams.set(`id${i}`, aule[i].idAula.toString());
    }
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'DELETE',
        // 'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
      }),
      params: httpParams
    }
    return this.http.delete(url, httpOption);
  }

  searchAula(term: string): Observable<Aula[]> {
    if (!term.trim()) {
      // if not search term, return empty doc array.
      return of([]);
    }
    const url = `${this.urlServer}/aula/searchAula/${term}`;
    return this.http.get<Aula[]>(url, httpOptions);

  }
}
