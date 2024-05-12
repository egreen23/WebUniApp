import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AulaComponent} from './aula/aula.component';
import {AulaDetailComponent} from './aula-detail/aula-detail.component';
import {AulaListComponent} from './aula-list/aula-list.component';
import {NewaulaformComponent} from './newaulaform/newaulaform.component';
import {AulaCenterComponent} from './aula-center/aula-center.component';
import {SegauthGuard} from '../../auth/segauth.guard';
import {NewtoolfromComponent} from './newtoolfrom/newtoolfrom.component';

const aulaRoutes: Routes = [
  { path: 'aule',
    component: AulaCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
     {path: '', component: AulaComponent},
     {path: ':id', component: AulaDetailComponent}
   ]},
  {path: 'newaula', component: NewaulaformComponent, canActivate: [SegauthGuard]},
  {path: 'newtool', component: NewtoolfromComponent, canActivate: [SegauthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(aulaRoutes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
