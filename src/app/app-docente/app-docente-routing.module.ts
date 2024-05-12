import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../app-docente/home/home.component';
import {DocCenterComponent} from './doc-center/doc-center.component';
import {DocauthGuard} from '../auth/docauth.guard';

const docRoutes: Routes = [
  { path: 'dochome',
    component: DocCenterComponent,
    canActivate: [DocauthGuard],
    canActivateChild: [DocauthGuard],
    children: [
      { path: ':id',
        component: HomeComponent},
    ]},
  { path: 'matdid', loadChildren: './matdidattico/matdidattico.module#MatdidatticoModule', canLoad: [DocauthGuard]},
  { path: 'segnaladoc', loadChildren: './segnalazione/segnalazionedoc.module#SegnalazionedocModule', canLoad: [DocauthGuard]}
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(docRoutes)  ]
})
export class AppDocenteRoutingModule { }
