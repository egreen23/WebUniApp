import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AulaComponent} from './aula/aula.component';
import {AulaDetailComponent} from './aula-detail/aula-detail.component';
import {AulaListComponent} from './aula-list/aula-list.component';

const aulaRoutes: Routes = [
  { path: 'rooms',  component: AulaComponent },
  { path: 'aula/:id', component: AulaDetailComponent },
  { path: 'aulalist', component: AulaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(aulaRoutes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
