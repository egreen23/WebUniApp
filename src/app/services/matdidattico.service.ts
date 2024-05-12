import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable} from 'rxjs';
import {MaterialeDTO} from '../dto/materialeDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MatdidatticoService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) { }

  getbyIdIns(id: number): Observable<MaterialeDTO[]> {
    const url = `${this.urlServer}/materiale/getMatByIdInsegnamento/${id}`;
    return this.http.get<MaterialeDTO[]>(url, httpOptions);

  }

  newMat(mat: MaterialeDTO): Observable<MaterialeDTO> {
    const url = `${this.urlServer}/materiale/newMat`;
    return this.http.post<MaterialeDTO>(url, mat, httpOptions);

  }
}
