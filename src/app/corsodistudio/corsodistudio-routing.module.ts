import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarioComponent} from '../calendario/calendario/calendario.component';
import {CalendarioDetailComponent} from '../calendario/calendario-detail/calendario-detail.component';
import {CalendarioListComponent} from '../calendario/calendario-list/calendario-list.component';
import {CorsodistudioComponent} from './corsodistudio/corsodistudio.component';
import {CorsoDetailComponent} from './corso-detail/corso-detail.component';
import {CorsoListComponent} from './corso-list/corso-list.component';

const cdsRoutes: Routes = [
  {path: 'corsodistudio', component: CorsodistudioComponent},
  {path: 'corsodistudio/:id', component: CorsoDetailComponent},
  {path: 'corsolist', component: CorsoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cdsRoutes)],
  exports: [RouterModule]
})
export class CorsodistudioRoutingModule { }
