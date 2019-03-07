import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CalendarioComponent} from './calendario/calendario.component';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioDetailComponent } from './calendario-detail/calendario-detail.component';
import { CalendarioListComponent } from './calendario-list/calendario-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarioRoutingModule
  ],
  declarations: [
    CalendarioComponent,
    CalendarioDetailComponent,
    CalendarioListComponent
  ]
})
export class CalendarioModule { }
