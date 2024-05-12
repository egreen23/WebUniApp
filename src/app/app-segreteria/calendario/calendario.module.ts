import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { FormsModule }    from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import {BrowserModule} from '@angular/platform-browser';

import { CalendarioRoutingModule } from './calendario-routing.module';
import {CalendarioUiComponent} from "./calendario-ui/calendario-ui.component";
import {CalendarioComponent} from "./calendario/calendario.component";
import {CalendarioDetailComponent} from "./calendario-detail/calendario-detail.component";
import {CalendarioListComponent} from "./calendario-list/calendario-list.component";
import { NewlezioneformComponent } from './newlezioneform/newlezioneform.component';

import { DatePipe } from '@angular/common';
import { NewcalendarioformComponent } from './newcalendarioform/newcalendarioform.component';
import { CalendarioCenterComponent } from './calendario-center/calendario-center.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { UpdatecompformComponent } from './updatecompform/updatecompform.component';
import {AppSegreteriaModule} from '../app-segreteria.module';
import {SideNavSegComponent} from '../side-nav-seg/side-nav-seg.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    // AuthModule,
    SweetAlert2Module.forRoot(),
    CalendarioRoutingModule
  ],
  declarations: [
    CalendarioComponent,
    CalendarioDetailComponent,
    CalendarioListComponent,
    CalendarioUiComponent,
    NewlezioneformComponent,
    NewcalendarioformComponent,
    CalendarioCenterComponent,
    UpdatecompformComponent,
  ],
  providers: [
    DatePipe,
   // {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}

  ]
})
export class CalendarioModule { }
