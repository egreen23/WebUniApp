import { Component, OnInit } from '@angular/core';
import {Calendario} from '../../../domain/calendario';
import {AulaService} from '../../../services/aula.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CalendarioService} from '../../../services/calendario.service';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newcalendarioform',
  templateUrl: './newcalendarioform.component.html',
  styleUrls: ['./newcalendarioform.component.scss']
})
export class NewcalendarioformComponent implements OnInit {

  cal = new Calendario(0, '','','','','', 0);

  corsi: Corsodistudio[];

  constructor(private calService: CalendarioService,
              private cdsService: CorsodistudioService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getCorsi();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cal); }

  getCorsi(): void {
    this.cdsService.getCdS().subscribe(data => this.corsi = data);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {

    this.calService.newCalendario(this.cal).subscribe(data => this.cal = data);

    Swal.fire({
      title:  'Inserito!',
      text: 'Calendario creato con successo',
      type: 'success',
      timer: 1500
    });

    this.location.back();

  }



}
