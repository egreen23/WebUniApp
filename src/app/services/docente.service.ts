import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable, of} from 'rxjs';

import {DocenteDTO} from '../dto/docenteDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) {}



  getAll(): Observable<DocenteDTO[]> {
    const url = `${this.urlServer}/doc/findAll`;
    return this.http.get<DocenteDTO[]>(url, httpOptions);
  }

  newDocente(doc: DocenteDTO): Observable<DocenteDTO> {
    const url = `${this.urlServer}/doc/newDocente`;
    return this.http.post<DocenteDTO>(url, doc, httpOptions);

  }

  getbyMatricola(id: number): Observable<DocenteDTO> {
    const url = `${this.urlServer}/doc/getByMatricola/${id}`;
    return this.http.get<DocenteDTO>(url, httpOptions);

  }

  updateDoc(doc: DocenteDTO): Observable<DocenteDTO> {
    const url = `${this.urlServer}/doc/updateDocByMatricola/${doc.idMatricola}`;
    return this.http.post<DocenteDTO>(url, doc, httpOptions);

  }

  searchDoc(term: string): Observable<DocenteDTO[]> {
    if (!term.trim()) {
      // if not search term, return empty doc array.
      return of([]);
    }
    const url = `${this.urlServer}/doc/searchDoc/${term}`;
    return this.http.get<DocenteDTO[]>(url, httpOptions);

  }




}



