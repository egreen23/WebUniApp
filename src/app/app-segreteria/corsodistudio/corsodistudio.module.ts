import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { InsegnamentoDetailComponent} from './insegnamento-detail/insegnamento-detail.component';
import { CorsodistudioComponent} from './corsodistudio/corsodistudio.component';
import { CorsoDetailComponent} from './corso-detail/corso-detail.component';
import { CorsoListComponent} from './corso-list/corso-list.component';
import { InsegnamentoListComponent} from './insegnamento-list/insegnamento-list.component';
import { CorsodistudioRoutingModule } from './corsodistudio-routing.module';
import { NewcorsoformComponent } from './newcorsoform/newcorsoform.component';
import { NewinsegnamentoformComponent } from './newinsegnamentoform/newinsegnamentoform.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { CorsodistudioCenterComponent } from './corsodistudio-center/corsodistudio-center.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    SweetAlert2Module.forRoot(),
    CorsodistudioRoutingModule
  ],
  declarations: [
    CorsoDetailComponent,
    CorsodistudioComponent,
    CorsoListComponent,
    NewcorsoformComponent,
    InsegnamentoListComponent,
    InsegnamentoDetailComponent,
    NewinsegnamentoformComponent,
    CorsodistudioCenterComponent

  ]
})
export class CorsodistudioModule { }
