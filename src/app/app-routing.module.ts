import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CalendarioComponent} from './calendario/calendario.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calendario', component: CalendarioComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule {}


