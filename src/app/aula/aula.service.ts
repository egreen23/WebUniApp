import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Calendario} from '../model/calendario';
import {AppSettings} from '../app-settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Aula} from '../model/aula';
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
export class AulaService {

  private urlServer: string = AppSettings.URL_Server;
  private handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('aulaService'); }

  getAll(): Observable<Aula[]> {
    const url = `${this.urlServer}/aula/findAll`;
    return this.http.get<Aula[]>(url, httpOptions).pipe(
      catchError(this.handleError('getAll', []))
    );

  }

  getAulabyId(id: number): Observable<Aula> {
    const url = `${this.urlServer}/aula/getById/${id}`;
    return this.http.get<Aula>(url, httpOptions);
  }

  updateAula(room: Aula): Observable<Aula> {
    const url = `${this.urlServer}/aula/updateAulaById/${room.idAula}`;
    //return this.http.post<Aula>(url, room, httpOptions);
    const jroom = JSON.stringify(room);
    console.log(JSON.stringify(room));
    return this.http.post<Aula>(url, jroom, httpOptions).pipe(
      catchError(this.handleError('updateAula', room))
    );
  }
}
