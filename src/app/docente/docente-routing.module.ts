import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocenteDetailComponent} from './docente-detail/docente-detail.component';
import {DocenteComponent} from './docente/docente.component';
import {DocenteListComponent} from './docente-list/docente-list.component';


const docRoutes: Routes = [
  { path: 'doc',  component: DocenteComponent },
  { path: 'doc/:id', component: DocenteDetailComponent },
  { path: 'doclist', component: DocenteListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(docRoutes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
