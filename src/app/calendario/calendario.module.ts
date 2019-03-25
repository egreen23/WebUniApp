import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CalendarioComponent} from './calendario/calendario.component';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioDetailComponent } from './calendario-detail/calendario-detail.component';
import { CalendarioListComponent } from './calendario-list/calendario-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpErrorHandler} from '../http-error-handler.service';
import {MessageService} from '../message.service';
import {HttpClientModule} from '@angular/common/http';
import { CalendarioUIComponent } from './calendario-ui/calendario-ui.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    CalendarioRoutingModule
  ],
  declarations: [
    CalendarioComponent,
    CalendarioDetailComponent,
    CalendarioListComponent,
    CalendarioUIComponent
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ]
})
export class CalendarioModule { }
