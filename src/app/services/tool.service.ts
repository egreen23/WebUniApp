import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppSettings} from '../app-settings';
import {Observable} from 'rxjs';
import {Tool} from '../domain/tool';
import {ToolDTO} from '../dto/toolDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private urlServer: string = AppSettings.URL_Server;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tool[]>  {
    const url = `${this.urlServer}/tool/findAll`;
    return this.http.get<Tool[]>(url, httpOptions);
  }

  getbyIdAula(id: number): Observable<ToolDTO[]> {
    const url = `${this.urlServer}/attrezzatura/getAttbyIdAula/${id}`;
    return this.http.get<ToolDTO[]>(url, httpOptions);
  }

  deleteToolfromAula(id: number): Observable<{}> {
    const url = `${this.urlServer}/attrezzatura/deleteAtt/${id}`;
    return this.http.delete(url, httpOptions);
  }

  deleteAllToolsfromAula(tools: ToolDTO[]): Observable<{}> {
    const url = `${this.urlServer}/attrezzatura/deleteAttrezzature`;
    let httpParams = new HttpParams();
    let num = 0;
    let i;
    for (i = num; i < tools.length ; i++) {
      httpParams = httpParams.set(`id${i}`, tools[i].idAttrezzatura.toString());
    }
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: httpParams
    }
    return this.http.delete(url, httpOption);

  }

  addTooltoAula(tool: ToolDTO): Observable<ToolDTO> {
    const url = `${this.urlServer}/attrezzatura/newAtt`;
    return this.http.post<ToolDTO>(url, tool, httpOptions);

  }

  newTool(tool: Tool): Observable<Tool> {
    const url = `${this.urlServer}/tool/newTool`;
    return this.http.post<Tool>(url, tool, httpOptions);


  }
}
