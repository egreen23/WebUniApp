import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Calendario} from '../model/calendario';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Lezione} from '../model/lezione';
import { HttpErrorHandler, HandleError} from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private urlServer: string = AppSettings.URL_Server;
  private handleError: HandleError;


  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('calService');
  }

  getCalendari(): Observable<Calendario[]> {
    const url = `${this.urlServer}/cal/findAll`;
    return this.http.get<Calendario[]>(url, httpOptions).pipe(
      catchError(this.handleError('getAllcalendari', [])));

  }

  getCalendariobyId(id: number): Observable<Calendario> {
    const url = `${this.urlServer}/cal/getCalendarioById/${id}`;
    return this.http.get<Calendario>(url, httpOptions);//.pipe(
     // catchError(this.handleError('getCal')));

  }

  newLezione(lez: Lezione): Observable<Lezione> {
    const url = `${this.urlServer}/lez/newLezione`;
    //const jlez = JSON.stringify(lez);
    //const jlez = angular.toJSON(lez);
    console.log(JSON.stringify(lez));
    return this.http.post<Lezione>(url, lez, httpOptions);
  }


}
