import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatdidatticoListComponent} from './matdidattico-list/matdidattico-list.component';
import {NewmaterialeformComponent} from './newmaterialeform/newmaterialeform.component';
import {MatdidatticoComponent} from './matdidattico/matdidattico.component';
import {DocauthGuard} from '../../auth/docauth.guard';


const matRoutes: Routes = [

  { path: 'matdid',
    component: MatdidatticoComponent,
    canActivate: [DocauthGuard],
    canActivateChild: [DocauthGuard],
    children: [
      { path: ':idIns', component: MatdidatticoListComponent},
      { path: 'newmat/:idIns', component: NewmaterialeformComponent}
      ]
  }
  ];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(matRoutes)  ]
})
export class MatdidatticoRoutingModule { }
