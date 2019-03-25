import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarioComponent} from './calendario/calendario.component';
import {CalendarioDetailComponent} from './calendario-detail/calendario-detail.component';
import {CalendarioListComponent} from './calendario-list/calendario-list.component';
import {CalendarioUIComponent} from './calendario-ui/calendario-ui.component';

const calendarioRoutes: Routes = [
  {path: 'calendario', component: CalendarioComponent},
  {path: 'calendario/:id', component: CalendarioDetailComponent},
  {path: 'calendariolist', component: CalendarioListComponent}
  //{path: 'belva', component: CalendarioUIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(calendarioRoutes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
