import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Interceptor} from '../interceptor';
import {AngularFireModule, FirebaseAuth} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FirebaseauthService} from './firebaseauth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
   /* AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,*/
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    FirebaseauthService
  ]
})
export class AuthModule { }
