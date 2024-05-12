import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {MatdidatticoRoutingModule} from './matdidattico-routing.module';
import { MatdidatticoListComponent } from './matdidattico-list/matdidattico-list.component';
import { NewmaterialeformComponent } from './newmaterialeform/newmaterialeform.component';
import { MatdidatticoComponent } from './matdidattico/matdidattico.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {FileSizePipe} from './file-size.pipe';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    MatdidatticoListComponent,
    NewmaterialeformComponent,
    MatdidatticoComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    MatdidatticoRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class MatdidatticoModule { }
