import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from "sweetalert2";
import {FirebaseauthService} from '../firebaseauth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  matricola: number;
  psw: string;

  constructor(
              public authService: AuthService,
              public router: Router,
              public fireauthService: FirebaseauthService) {
  }


  login() {
    this.authService.login(this.matricola, this.psw).subscribe(data => {
      if (this.authService.isLoggedIn) {
        if (data.tipo === 'docente') {
          this.authService.isLoggedInDoc = true;
          let redirect1 = `/dochome/${data.idDocente}`;
          this.router.navigateByUrl(redirect1);


        }
        if (data.tipo === 'segreteria') {
          this.authService.isLoggedInSeg = true;
          let redirect2 = `/seghome/${data.idSegreteria}`;
          this.router.navigateByUrl(redirect2);


        }
        Swal.fire( {
            title: 'Dati corretti!',
            text: `Benvenuto ${data.nome} ${data.cognome}`,
            type: 'success',
            timer: 1500
          }
        );
        this.signInAnonymously();

      }

    });
  }


  logout() {
    this.authService.logout();
    this.fireauthService.signOut();
  }

  async signInAnonymously() {
    await this.fireauthService.anonymousLogin();
    return await this.afterSignIn();
  }

  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    // return this.router.navigate(['/']);
    console.log('firebase');
    return;
  }

}



