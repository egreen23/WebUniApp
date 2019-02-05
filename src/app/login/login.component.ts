import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  matricola = 0;
  password = '';

  constructor(private loginserv: LoginService) { }

  tryLogin() {
    this.loginserv.login(this.matricola, this.password);
  }

  ngOnInit() {
  }

}
