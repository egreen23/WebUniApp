import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocenteDetailComponent} from './docente-detail/docente-detail.component';
import {DocenteComponent} from './docente/docente.component';
import {DocenteListComponent} from './docente-list/docente-list.component';
import {NewdocenteformComponent} from './newdocenteform/newdocenteform.component';
import {DocenteCenterComponent} from './docente-center/docente-center.component';
import {SegauthGuard} from '../../auth/segauth.guard';


const docRoutes: Routes = [
  /*{ path: 'doc',  component: DocenteComponent },
  { path: 'doc/:id', component: DocenteDetailComponent },
  { path: 'doclist', component: DocenteListComponent},
  { path: 'newdoc', component: NewdocenteformComponent}*/
  { path: 'docente',
    component: DocenteCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
      {path: '', component: DocenteComponent},
      {path: ':id', component: DocenteDetailComponent}

    ]},
  {path: 'newDoc', component: NewdocenteformComponent, canActivate: [SegauthGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(docRoutes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
