import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DocauthGuard} from './auth/docauth.guard';
import {SegauthGuard} from './auth/segauth.guard';


const routes: Routes = [

  { path: 'dochome', loadChildren: './app-docente/app-docente.module#AppDocenteModule', canLoad: [DocauthGuard]},
  { path: 'seghome', loadChildren: './app-segreteria/app-segreteria.module#AppSegreteriaModule', canLoad: [SegauthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes)  ]

})
export class AppRoutingModule { }
