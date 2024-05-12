import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AulaRoutingModule } from './aula-routing.module';
import {AulaComponent} from './aula/aula.component';
import {AulaDetailComponent} from './aula-detail/aula-detail.component';
import {AulaListComponent} from './aula-list/aula-list.component';
import { NewaulaformComponent } from './newaulaform/newaulaform.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { AulaCenterComponent } from './aula-center/aula-center.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '../../interceptor';
import { AulaSearchComponent } from './aula-search/aula-search.component';
import { NewtoolfromComponent } from './newtoolfrom/newtoolfrom.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    AulaRoutingModule
  ],
  declarations: [
    AulaComponent,
    AulaDetailComponent,
    AulaListComponent,
    NewaulaformComponent,
    ToolListComponent,
    AulaCenterComponent,
    AulaSearchComponent,
    NewtoolfromComponent
  ],
  providers: [
  ]
})
export class AulaModule { }
