import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { InsegnamentoRoutingModule } from './insegnamento-routing.module';
import {InsegnamentoComponent} from './insegnamento/insegnamento.component';
import {InsegnamentoListComponent} from './insegnamento-list/insegnamento-list.component';
import {InsegnamentoDetailComponent} from './insegnamento-detail/insegnamento-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InsegnamentoRoutingModule
  ],
  declarations: [
    InsegnamentoComponent,
    InsegnamentoListComponent,
    InsegnamentoDetailComponent
  ]
})
export class InsegnamentoModule { }
