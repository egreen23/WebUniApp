import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { SegnalazioneRoutingModule } from './segnalazione-routing.module';
import { SegnalazioneListComponent } from './segnalazione-list/segnalazione-list.component';
import { SegnalazioneDetailComponent } from './segnalazione-detail/segnalazione-detail.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { SegnalazioneCenterComponent } from './segnalazione-center/segnalazione-center.component';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    SweetAlert2Module.forRoot(),
    SegnalazioneRoutingModule
  ],
  declarations: [
    SegnalazioneListComponent,
    SegnalazioneDetailComponent,
    SegnalazioneCenterComponent
  ]
})
export class SegnalazioneModule { }
