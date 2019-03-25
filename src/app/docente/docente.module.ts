import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { DocenteRoutingModule } from './docente-routing.module';
import {DocenteComponent} from './docente/docente.component';
import {DocenteListComponent} from './docente-list/docente-list.component';
import {DocenteDetailComponent} from './docente-detail/docente-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocenteRoutingModule
  ],
  declarations: [
    DocenteComponent,
    DocenteListComponent,
    DocenteDetailComponent
  ]
})
export class DocenteModule { }
