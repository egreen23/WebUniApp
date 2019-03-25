import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SegnalazioneComponent} from './segnalazione/segnalazione.component';

const segRoutes: Routes = [
  { path: 'seg',  component: SegnalazioneComponent }
];


@NgModule({
  imports: [RouterModule.forChild(segRoutes)],
  exports: [RouterModule]
})
export class SeganlazioneRoutingModule { }
