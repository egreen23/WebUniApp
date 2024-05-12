import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {SegCenterComponent} from './seg-center/seg-center.component';
import {SegauthGuard} from '../auth/segauth.guard';


const segRoutes: Routes = [
 // { path: 'seghome', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
 // { path: '', redirectTo: '/login', pathMatch: 'full' }
  { path: 'seghome/:id',
    component: SegCenterComponent,
    canActivate: [SegauthGuard],
    canActivateChild: [SegauthGuard],
    children: [
      {path: '', component: HomeComponent}
    ]},
  {path: 'aule', loadChildren: './aula/aula.module#AulaModule', canLoad: [SegauthGuard]},
  {path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioModule', canLoad: [SegauthGuard]},
  {path: 'corsodistudio', loadChildren: './corsodistudio/corsodistudio.module#CorsodistudioModule', canLoad: [SegauthGuard]},
  {path: 'docente', loadChildren: './docente/docente.module#DocenteModule', canLoad: [SegauthGuard]},
  {path: 'segnalaseg', loadChildren: './segnalazione/segnalazione.module#SegnalazioneModule', canLoad: [SegauthGuard]}
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(segRoutes)  ]
})
export class AppSegreteriaRoutingModule { }
