import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AulaRoutingModule } from './aula-routing.module';
import {AulaComponent} from './aula/aula.component';
import {AulaDetailComponent} from './aula-detail/aula-detail.component';
import {AulaListComponent} from './aula-list/aula-list.component';
import { MessagesComponent} from '../messages/messages.component';
import {ConfigComponent} from '../config/config/config.component';
import {HttpErrorHandler} from '../http-error-handler.service';
import {MessageService} from '../message.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AulaRoutingModule
  ],
  declarations: [
    AulaComponent,
    AulaDetailComponent,
    AulaListComponent,
    MessagesComponent,
    ConfigComponent
  ],
  providers: [HttpErrorHandler,
    MessageService]
})
export class AulaModule { }
