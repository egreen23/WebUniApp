import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarioUiComponent} from "./calendario-ui/calendario-ui.component";
import {CalendarioComponent} from './calendario/calendario.component';
import { CalendarioListComponent} from './calendario-list/calendario-list.component';
import { CalendarioDetailComponent} from './calendario-detail/calendario-detail.component';
import {NewlezioneformComponent} from './newlezioneform/newlezioneform.component';
import {NewcalendarioformComponent} from './newcalendarioform/newcalendarioform.component';
import {CalendarioCenterComponent} from './calendario-center/calendario-center.component';
import {SegauthGuard} from '../../auth/segauth.guard';
import {UpdatecompformComponent} from './updatecompform/updatecompform.component';

const calendarioRoutes: Routes = [
  { path: 'calendario',
    component: CalendarioCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
      {path: '', component: CalendarioComponent},
      {path: ':id/:idCds/:tipo', component: CalendarioDetailComponent},
      {path: 'newlezione/:idCds/:idCal/:date', component: NewlezioneformComponent},
      {path: 'newCalendario', component: NewcalendarioformComponent}
      // {path: 'update/:id/:tipo', component: UpdateaulaformComponent}
      // children: [{path: 'update', component: UpdateaulaformComponent}]}
    ]
  },
  { path: 'update/:idLez/:tipo', component: UpdatecompformComponent, canActivate: [SegauthGuard]},

];
@NgModule({
  imports: [RouterModule.forChild(calendarioRoutes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
