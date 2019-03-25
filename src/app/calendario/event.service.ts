import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Calendario} from '../model/calendario';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';
import {Aula} from '../model/aula';
import {Icalendario} from '../interfaces/icalendario';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true',
    'Accept': 'application/json'

  })
};
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private urlServer: string = AppSettings.URL_Server;
  private handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('calenUIService');
  }

  public getEvents(id: number): Observable<Icalendario> {
   /* const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    console.log(dateObj.toJSON());
    console.log(yearMonth.())*/

    const url = `${this.urlServer}/cal/getCalendarioById/${id}`;
    return this.http.get<Icalendario>(url, httpOptions);

  }

  /*createCalendario(cal: Calendario): Observable<any> {
    let calendario = JSON.parse(JSON.stringify(cal));
    return calendario;

  }*/
}/*
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [{
      title: 'All Day Event',
      start: yearMonth + '-01'
    },
      {
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-16T16:00:00'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: yearMonth + '-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28'
      }];
    return of(data);
  }
}*/


