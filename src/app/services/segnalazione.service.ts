import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable} from 'rxjs';
import {SegnalazioneDTO} from '../dto/segnalazioneDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SegnalazioneService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) { }


  getbySegr(id: number): Observable<SegnalazioneDTO[]> {
    const url = `${this.urlServer}/segnala/getbyIdSegr/${id}`;
    return this.http.get<SegnalazioneDTO[]>(url, httpOptions);
  }

  getOne(id: number): Observable<SegnalazioneDTO> {
    const url = `${this.urlServer}/segnala/getById/${id}`;
    return this.http.get<SegnalazioneDTO>(url, httpOptions);
  }

  update(segn: SegnalazioneDTO): Observable<SegnalazioneDTO> {
    const url = `${this.urlServer}/segnala/updateSegnal/${segn.idSegnalazione}`;
    return this.http.post<SegnalazioneDTO>(url, segn, httpOptions );

  }

  getbyDoc(id: number): Observable<SegnalazioneDTO[]> {
    const url = `${this.urlServer}/segnala/getbyIdDocente/${id}`;
    return this.http.get<SegnalazioneDTO[]>(url, httpOptions);

  }

  getbyAula(id: number): Observable<SegnalazioneDTO[]> {
    const url = `${this.urlServer}/segnala/getbyIdAula/${id}`;
    return this.http.get<SegnalazioneDTO[]>(url, httpOptions);

  }

  newSegn(segn: SegnalazioneDTO): Observable<SegnalazioneDTO> {
    const url = `${this.urlServer}/segnala/newSegnalazione`;
    return this.http.post<SegnalazioneDTO>(url, segn, httpOptions );

  }

  getbyStato(id: number, term: string): Observable<SegnalazioneDTO[]> {
    const url = `${this.urlServer}/segnala/filterSegr/${id}/${term}`;
    return this.http.get<SegnalazioneDTO[]>(url, httpOptions);
  }

  getbyStatoDoc(id: number, term: string): Observable<SegnalazioneDTO[]> {
    const url = `${this.urlServer}/segnala/filterDoc/${id}/${term}`;
    return this.http.get<SegnalazioneDTO[]>(url, httpOptions);
  }

}
