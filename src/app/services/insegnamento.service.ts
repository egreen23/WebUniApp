import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable} from 'rxjs';
import {InsegnamentoDTO} from '../dto/insegnamentoDTO';
import {Insegnamento} from '../domain/insegnamento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InsegnamentoService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) {}

  getAll(): Observable<InsegnamentoDTO[]> {
    const url = `${this.urlServer}/insegnamento/findAll`;
    return this.http.get<InsegnamentoDTO[]>(url, httpOptions);
  }

  getbyCds(id: number): Observable<InsegnamentoDTO[]> {
    const url = `${this.urlServer}/insegnamento/getByIdCorso/${id}`;
    return this.http.get<InsegnamentoDTO[]>(url, httpOptions);
  }

  getbyId(id: number): Observable<InsegnamentoDTO> {
    const url = `${this.urlServer}/insegnamento/getById/${id}`;
    return this.http.get<InsegnamentoDTO>(url, httpOptions);

  }

  newInsegnamento(ins: Insegnamento): Observable<Insegnamento> {
    const url = `${this.urlServer}/insegnamento/newInsegnamento`;
    return this.http.post<Insegnamento>(url, ins, httpOptions);

  }

  updateInsegnamento(ins: InsegnamentoDTO): Observable<InsegnamentoDTO> {
    const url = `${this.urlServer}/insegnamento/updateById/${ins.idInsegnamento}`;
    return this.http.post<InsegnamentoDTO>(url, ins, httpOptions);
  }

  getbyIdDoc(id: number): Observable<InsegnamentoDTO[]> {
    const url = `${this.urlServer}/insegnamento/getByIdDocente/${id}`;
    return this.http.get<InsegnamentoDTO[]>(url, httpOptions);
  }
}
