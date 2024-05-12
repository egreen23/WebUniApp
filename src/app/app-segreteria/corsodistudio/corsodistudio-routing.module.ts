import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorsodistudioComponent} from './corsodistudio/corsodistudio.component';
import {CorsoDetailComponent} from './corso-detail/corso-detail.component';
import {CorsoListComponent} from './corso-list/corso-list.component';
import {NewcorsoformComponent} from './newcorsoform/newcorsoform.component';
import {InsegnamentoDetailComponent} from './insegnamento-detail/insegnamento-detail.component';
import {InsegnamentoListComponent} from './insegnamento-list/insegnamento-list.component';
import {NewinsegnamentoformComponent} from './newinsegnamentoform/newinsegnamentoform.component';
import {CorsodistudioCenterComponent} from './corsodistudio-center/corsodistudio-center.component';
import {SegauthGuard} from '../../auth/segauth.guard';

const cdsRoutes: Routes = [
  /*{path: 'corsodistudio', component: CorsodistudioComponent},
  {path: 'corsodistudio/:id', component: CorsoDetailComponent},
  {path: 'corsolist', component: CorsoListComponent},
  {path: 'newCorso', component: NewcorsoformComponent},
  { path: 'inseg/:id', component: InsegnamentoDetailComponent },
  { path: 'inslist', component: InsegnamentoListComponent},
  { path: 'newinseg/:id', component: NewinsegnamentoformComponent}*/
  { path: 'corsodistudio',
    component: CorsodistudioCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
      {path: '', component: CorsodistudioComponent},
      {path: 'cds/:id', component: CorsoDetailComponent},
      {path: 'newCorso', component: NewcorsoformComponent},
      {path: 'inseg/:id', component: InsegnamentoDetailComponent},
      {path: 'newInseg/:id', component: NewinsegnamentoformComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(cdsRoutes)],
  exports: [RouterModule]
})
export class CorsodistudioRoutingModule { }
