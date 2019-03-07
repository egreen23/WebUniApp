import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { CalendarioModule } from './calendario/calendario.module';

import { CorsodistudioComponent } from './corsodistudio/corsodistudio/corsodistudio.component';
import { CorsoListComponent } from './corsodistudio/corso-list/corso-list.component';
import { CorsoDetailComponent } from './corsodistudio/corso-detail/corso-detail.component';
import { InsegnamentoComponent } from './insegnamento/insegnamento/insegnamento.component';
import { InsegnamentoListComponent } from './insegnamento/insegnamento-list/insegnamento-list.component';
import { InsegnamentoDetailComponent } from './insegnamento/insegnamento-detail/insegnamento-detail.component';
import { DocenteComponent } from './docente/docente/docente.component';
import { DocenteListComponent } from './docente/docente-list/docente-list.component';
import { DocenteDetailComponent } from './docente/docente-detail/docente-detail.component';
import { SegnalazioneComponent } from './segnalazione/segnalazione/segnalazione.component';
import { AulaModule } from './aula/aula.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CorsodistudioComponent,
    CorsoListComponent,
    CorsoDetailComponent,
    InsegnamentoComponent,
    InsegnamentoListComponent,
    InsegnamentoDetailComponent,
    DocenteComponent,
    DocenteListComponent,
    DocenteDetailComponent,
    SegnalazioneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CalendarioModule,
    AulaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
