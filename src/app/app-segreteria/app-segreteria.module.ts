import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSegreteriaRoutingModule } from './app-segreteria-routing.module';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CalendarioModule} from './calendario/calendario.module';
import {AulaModule} from './aula/aula.module';
import {CorsodistudioModule} from './corsodistudio/corsodistudio.module';
import {DocenteModule} from './docente/docente.module';
import {SegnalazioneModule} from './segnalazione/segnalazione.module';
import { SegCenterComponent } from './seg-center/seg-center.component';
import {Interceptor} from '../interceptor';
import {AuthModule} from '../auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { SideNavSegComponent } from './side-nav-seg/side-nav-seg.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';






@NgModule({
  declarations: [
    HomeComponent,
    SegCenterComponent,
    SideNavSegComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    CalendarioModule,
    AulaModule,
    CorsodistudioModule,
    DocenteModule,
    SegnalazioneModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    // AuthModule,
    AppSegreteriaRoutingModule
  ],
  exports: [SideNavSegComponent],
  providers: [
   // {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ]
})
export class AppSegreteriaModule { }
