import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {AppSettings} from '../app-settings';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*utente: User = {
    idMatricola: 1,
    nome: '',
    cognome: '',
    email: '',
    password: '',
    data_di_nascita: '',
    indirizzo: '',
    telefono: ''
  };

  private UserSource = new BehaviorSubject<User>(this.utente);
  currentUser = this.UserSource.asObservable();

  constructor() { }

  changeUser(user: User): void {
    this.UserSource.next(user);
  }*/
}
