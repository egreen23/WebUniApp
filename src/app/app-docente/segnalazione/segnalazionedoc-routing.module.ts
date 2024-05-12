import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SegnalazioneComponent} from './segnalazione/segnalazione.component';
import {DocauthGuard} from '../../auth/docauth.guard';
import {SegnalazioneListComponent} from './segnalazione-list/segnalazione-list.component';
import {SegnalazioneDetailComponent} from './segnalazione-detail/segnalazione-detail.component';
import {NewsegnalazioneformComponent} from './newsegnalazioneform/newsegnalazioneform.component';

const segRoutes: Routes = [
  /* {path: 'segnlist/:id(doc)', component: SegnalazioneListComponent},
   {path: 'segn/:idseg', component: SegnalazioneDetailComponent},
   {path: 'newsegn/:idDoc', component: NewsegnalazioneformComponent}*/
  { path: 'segnaladoc',
    component: SegnalazioneComponent,
    canActivate: [DocauthGuard],
    canActivateChild: [DocauthGuard],
    children: [
      { path: ':id', component: SegnalazioneListComponent},
      { path: 'segn/:idseg', component: SegnalazioneDetailComponent},
      { path: 'newsegn/:idDoc', component: NewsegnalazioneformComponent}
    ]}
];
@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(segRoutes)  ]
})
export class SegnalazionedocRoutingModule { }
