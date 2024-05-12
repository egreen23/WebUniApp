import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable} from 'rxjs';
import {SegretarioDTO} from '../dto/segretarioDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SegreteriaService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) { }


  getAll(): Observable<SegretarioDTO[]> {
    const url = `${this.urlServer}/seg/findAll`;
    return this.http.get<SegretarioDTO[]>(url, httpOptions);
  }
}
