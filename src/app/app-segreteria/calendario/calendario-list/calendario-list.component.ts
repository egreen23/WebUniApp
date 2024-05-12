import { Component, OnInit } from '@angular/core';
import {CalendarioDTO} from '../../../dto/calendarioDTO';
import {CalendarioService} from '../../../services/calendario.service';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import Swal from "sweetalert2";
import {Calendario} from '../../../domain/calendario';

@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html',
  styleUrls: ['./calendario-list.component.css']
})
export class CalendarioListComponent implements OnInit {

  /*calendari: CalendarioDTO[];

  calchecked: CalendarioDTO[] = [];*/

  calendari: Calendario[];

  calchecked: Calendario[] = []

  corsi: Corsodistudio[];

  constructor(private calService: CalendarioService,
              private cdsService: CorsodistudioService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getCds();
    /*this.getCalendari();*/
    this.getAll();
  }

  get diagnostic() {
    return JSON.stringify(this.calendari);
  }

  /*getCalendari(): void {
    this.calService.getCalendari()
      .subscribe(calendari => this.calendari = calendari);
  }*/

  getAll() {
    this.calService.getAll().subscribe(data => this.calendari = data);
  }

  getCds(): void {
    this.cdsService.getCdS()
      .subscribe(data => this.corsi = data);
  }

  deleteAll(): void {

    let num =0;
    let i;
    for (i = num ; i < this.calendari.length; i++) {
      if (this.calendari[i].checked === true) {
        this.calchecked.push(this.calendari[i]);
      }
    }
    if (this.calchecked.length === 0) {
      return;
    }
    if (this.calchecked.length === 1) {
      this.calService.deleteCalendario(this.calchecked[0].idCalendario).subscribe();

      Swal.fire({
        title:  'Eliminato!',
        text: 'Calencario eliminato con successo',
        type: 'success',
        timer: 1500
      });
    } else  {
      this.calService.deleteAllCal(this.calchecked).subscribe();
      Swal.fire({
        title:  'Eliminati!',
        text: 'Calencari eliminati con successo',
        type: 'success',
        timer: 1500
      });
    }
    // elimina dall'array dei calendari i calendari rimossi
    num = 0;
    for (i = num ; i < this.calchecked.length; i++) {
      for (let j=0; j < this.calendari.length; j++) {
        if (this.calchecked[i].idCalendario === this.calendari[j].idCalendario) {
          this.calendari.splice(j,1);
        }
      }
    }

    // svuotare dopo aver usato il metodo perchè i calendari rimangono nell'array
    this.calchecked = [];
    /*this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/calendario']));*/

    return;
  }

}
