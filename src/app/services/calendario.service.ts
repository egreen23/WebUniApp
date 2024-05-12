import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CalendarioDTO} from '../dto/calendarioDTO';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Comp} from '../domain/comp';
import {Calendario} from '../domain/calendario';
import {CompDTO} from '../dto/compDTO';
import {Lezione} from '../domain/lezione';
import {Esame} from '../domain/esame';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'DELETE',
    // 'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private urlServer: string = AppSettings.URL_Server;


  constructor(private http: HttpClient) {}


  getAll(): Observable<Calendario[]> {
    const url = `${this.urlServer}/cal/getAll`;
    return this.http.get<Calendario[]>(url, httpOptions);

  }

  getCalendariobyId(id: number): Observable<CalendarioDTO> {
    const url = `${this.urlServer}/cal/getCalendarioById/${id}`;
    return this.http.get<CalendarioDTO>(url, httpOptions);

  }

  newLezione(lez: Comp): Observable<Comp> {
    const url = `${this.urlServer}/lez/newLezione`;
    return this.http.post<Comp>(url, lez, httpOptions);
  }

  deleteLezione(id: number): Observable<{}> {
    const url = `${this.urlServer}/lez/deleteLezione/${id}`;
    return this.http.delete(url, httpOptions);

  }

  saveAllLezione(lez: Comp[]): Observable<Comp[]> {
    const url = `${this.urlServer}/lez/addLezioni`;
    return this.http.post<Comp[]>(url, lez, httpOptions);
  }

  deleteEsame(id: number): Observable<{}> {
    const url = `${this.urlServer}/esame/deleteEsame/${id}`;
    return this.http.delete(url, httpOptions);

  }

  saveAllEsame(lez: Comp[]): Observable<Comp[]> {
    const url = `${this.urlServer}/esame/addEsami`;
    return this.http.post<Comp[]>(url, lez, httpOptions);
  }

  newEsame(exam: Comp): Observable<Comp> {
    const url = `${this.urlServer}/esame/newEsame`;
    return this.http.post<Comp>(url, exam, httpOptions);
  }

  newCalendario(cal: Calendario): Observable<Calendario> {
    const url = `${this.urlServer}/cal/newCalendario`;
    return this.http.post<Calendario>(url, cal, httpOptions);
  }


  deleteAllCal(cal: Calendario[]): Observable<{}> {
    const url = `${this.urlServer}/cal/deleteCalendari`;
    let httpParams = new HttpParams();
    let num = 0;
    let i;
    for (i = num; i < cal.length ; i++) {
      httpParams = httpParams.set(`id${i}`, cal[i].idCalendario.toString());
    }
    console.log(httpParams.toString());
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

  deleteCalendario(id: number) : Observable<{}> {
    const url = `${this.urlServer}/cal/deleteCalendario/${id}`;
    return this.http.delete(url, httpOptions);

  }

  getLezionibyIdCal(id: number): Observable<CompDTO[]> {
    const url = `${this.urlServer}/lez/getLezioniByIdCalendario/${id}`;
    return this.http.get<CompDTO[]>(url, httpOptions);
  }

  getEsamibyIdCal(id: number): Observable<CompDTO[]> {
    const url = `${this.urlServer}/esame/getEsameByIdCalendario/${id}`;
    return this.http.get<CompDTO[]>(url, httpOptions);
  }

  updateAulaLez(comp: Lezione): Observable<Lezione> {
    const url = `${this.urlServer}/lez/update`;
    return this.http.post<Lezione>(url, comp, httpOptions);

  }

  updateAulaEsa(comp: Esame): Observable<Esame> {
    const url = `${this.urlServer}/esame/update`;
    return this.http.post<Esame>(url, comp, httpOptions);

  }

  getLezionebyId(id: number): Observable<CompDTO> {
    const url = `${this.urlServer}/lez/getLezioneById/${id}`;
    return this.http.get<CompDTO>(url, httpOptions);

  }

  getEsamebyId(id: number): Observable<CompDTO> {
    const url = `${this.urlServer}/esame/getEsameById/${id}`;
    return this.http.get<CompDTO>(url, httpOptions);

  }
}
