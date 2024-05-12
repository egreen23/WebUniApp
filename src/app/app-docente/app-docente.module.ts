import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDocenteRoutingModule } from './app-docente-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import {MatdidatticoModule} from './matdidattico/matdidattico.module';
import { DocCenterComponent } from './doc-center/doc-center.component';
import {Interceptor} from '../interceptor';
import {SegnalazionedocModule} from './segnalazione/segnalazionedoc.module';
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
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [HomeComponent, DocCenterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
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
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    MatdidatticoModule,
    SegnalazionedocModule,
    AppDocenteRoutingModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ]
})
export class AppDocenteModule { }

