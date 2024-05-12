import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { DocenteRoutingModule } from './docente-routing.module';
import {DocenteComponent} from './docente/docente.component';
import {DocenteListComponent} from './docente-list/docente-list.component';
import {DocenteDetailComponent} from './docente-detail/docente-detail.component';
import { NewdocenteformComponent } from './newdocenteform/newdocenteform.component';
import { DocenteCenterComponent } from './docente-center/docente-center.component';
import { DocSearchComponent } from './doc-search/doc-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    DocenteRoutingModule
  ],
  declarations: [
    DocenteComponent,
    DocenteListComponent,
    DocenteDetailComponent,
    NewdocenteformComponent,
    DocenteCenterComponent,
    DocSearchComponent
  ]
})
export class DocenteModule { }
