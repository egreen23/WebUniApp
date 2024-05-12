import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SegnalazioneDetailComponent} from './segnalazione-detail/segnalazione-detail.component';
import {SegnalazioneCenterComponent} from './segnalazione-center/segnalazione-center.component';
import {SegauthGuard} from '../../auth/segauth.guard';
import {SegnalazioneListComponent} from './segnalazione-list/segnalazione-list.component';

const segRoutes: Routes = [
  /*{ path: 'seg',  component: SegnalazioneComponent },
  { path: 'seg/:id', component: SegnalazioneDetailComponent}*/
  { path: 'segnalaseg',
    component: SegnalazioneCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
     {path: ':idSegr', component: SegnalazioneListComponent},
     {path: 'detail/:id', component: SegnalazioneDetailComponent}
   ]}
];


@NgModule({
  imports: [RouterModule.forChild(segRoutes)],
  exports: [RouterModule]
})
export class SegnalazioneRoutingModule { }
