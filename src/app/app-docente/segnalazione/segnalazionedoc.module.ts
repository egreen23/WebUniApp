import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { SegnalazionedocRoutingModule } from './segnalazionedoc-routing.module';
import {SegnalazioneListComponent} from './segnalazione-list/segnalazione-list.component';
import {SegnalazioneDetailComponent} from './segnalazione-detail/segnalazione-detail.component';
import {NewsegnalazioneformComponent} from './newsegnalazioneform/newsegnalazioneform.component';
import {SegnalazioneComponent} from './segnalazione/segnalazione.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [SegnalazioneListComponent, SegnalazioneDetailComponent, NewsegnalazioneformComponent, SegnalazioneComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    SegnalazionedocRoutingModule
  ],
  providers: [DatePipe]
})
export class SegnalazionedocModule { }
