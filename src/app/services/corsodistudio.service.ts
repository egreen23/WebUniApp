import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Corsodistudio} from '../domain/corsodistudio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class CorsodistudioService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) {}

  getCdS(): Observable<Corsodistudio[]> {
    const url = `${this.urlServer}/corso/findAll`;
    return this.http.get<Corsodistudio[]>(url, httpOptions);

  }

  getCdSbyId(id: number): Observable<Corsodistudio> {
    const url = `${this.urlServer}/corso/getById/${id}`;
    return this.http.get<Corsodistudio>(url, httpOptions);

  }

  newCorso(c: Corsodistudio): Observable<Corsodistudio> {
    const url = `${this.urlServer}/corso/newCorso`;
    return this.http.post<Corsodistudio>(url, c, httpOptions);

  }

  getCdsbyTipo(term: string): Observable<Corsodistudio[]> {
    const url = `${this.urlServer}/corso/getByTipo/${term}`;
    return this.http.get<Corsodistudio[]>(url, httpOptions);
  }

  update(c: Corsodistudio): Observable<Corsodistudio> {
    const url = `${this.urlServer}/corso/updateById/${c.idcorsoDiStudio}`;
    return this.http.post<Corsodistudio>(url, c, httpOptions);

  }
}
