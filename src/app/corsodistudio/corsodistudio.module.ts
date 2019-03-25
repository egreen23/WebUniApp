import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CorsodistudioComponent} from './corsodistudio/corsodistudio.component';
import { CorsoDetailComponent} from './corso-detail/corso-detail.component';
import { CorsoListComponent} from './corso-list/corso-list.component';

import { CorsodistudioRoutingModule } from './corsodistudio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CorsodistudioRoutingModule
  ],
  declarations: [
    CorsoDetailComponent,
    CorsodistudioComponent,
    CorsoListComponent
  ]
})
export class CorsodistudioModule { }
