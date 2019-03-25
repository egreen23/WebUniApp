import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsegnamentoComponent} from './insegnamento/insegnamento.component';
import {InsegnamentoDetailComponent} from './insegnamento-detail/insegnamento-detail.component';
import {InsegnamentoListComponent} from './insegnamento-list/insegnamento-list.component';


const insRoutes: Routes = [
  { path: 'inseg',  component: InsegnamentoComponent },
  { path: 'inseg/:id', component: InsegnamentoDetailComponent },
  { path: 'inslist', component: InsegnamentoListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(insRoutes)],
  exports: [RouterModule]
})
export class InsegnamentoRoutingModule { }
