import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { SeganlazioneRoutingModule } from './seganlazione-routing.module';
import {SegnalazioneComponent} from './segnalazione/segnalazione.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeganlazioneRoutingModule
  ],
  declarations: [
    SegnalazioneComponent
  ]
})
export class SeganlazioneModule { }
