import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import {User} from '../model/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { UserService} from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {
    idMatricola: 0,
    nome: '',
    cognome: '',
    email: '',
    password: '',
    data_di_nascita: '',
    indirizzo: '',
    telefono: ''
  };
  //user: User = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginserv: LoginService
              ) { }



  ngOnInit() {

  }

  tryLogin() {
    this.loginserv.login(this.user.idMatricola, this.user.password).subscribe(user => this.user = user);

    this.router.navigate(['/home']);

  }

}
