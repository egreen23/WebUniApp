import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AppSegreteriaModule} from './app-segreteria/app-segreteria.module';
import {CommonModule} from '@angular/common';
import {AppDocenteModule} from './app-docente/app-docente.module';
import {AuthModule} from './auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {SideNavSegComponent} from './app-segreteria/side-nav-seg/side-nav-seg.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   // SideNavSegComponent
  ],
  imports: [

     BrowserModule,
     FormsModule,
     MatSidenavModule,
     MatExpansionModule,
     MatGridListModule,
     MatDividerModule,
     MatListModule,
     MatRadioModule,
     MatCheckboxModule,
     MatTableModule,
     MatButtonModule,
     MatFormFieldModule,
     MatSelectModule,
     MatInputModule,
     BrowserAnimationsModule,
     SweetAlert2Module.forRoot(),
     CommonModule,
     AppSegreteriaModule,
     AppDocenteModule,
     AuthModule,
     AngularFireModule.initializeApp(environment.firebase, 'UniApp'),
     AngularFireAuthModule,
     AngularFireDatabaseModule,
     AngularFireFunctionsModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireMessagingModule,
     AppRoutingModule
  ],
  exports: [SideNavSegComponent],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
