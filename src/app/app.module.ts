import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';

import { CalendarioModule } from './calendario/calendario.module';
import { CorsodistudioModule } from './corsodistudio/corsodistudio.module';
import { AulaModule } from './aula/aula.module';
import { DocenteModule } from './docente/docente.module';
import { InsegnamentoModule } from './insegnamento/insegnamento.module';
import { SeganlazioneModule } from './segnalazione/seganlazione.module';
/*import { ConfigComponent } from './config/config/config.component';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from './message.service';
import {HttpErrorHandler} from './http-error-handler.service';*/



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CalendarioModule,
    AulaModule,
    CorsodistudioModule,
    DocenteModule,
    InsegnamentoModule,
    SeganlazioneModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
