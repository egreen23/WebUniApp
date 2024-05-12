import { Component, OnInit } from '@angular/core';
import {SegnalazioneDTO} from '../../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../../services/segnalazione.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {SegretarioDTO} from '../../../dto/segretarioDTO';
import {SegreteriaService} from '../../../services/segreteria.service';
import {Aula} from '../../../domain/aula';
import {AulaService} from '../../../services/aula.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newsegnalazioneform',
  templateUrl: './newsegnalazioneform.component.html',
  styleUrls: ['./newsegnalazioneform.component.scss']
})
export class NewsegnalazioneformComponent implements OnInit {

  segnalazione = new SegnalazioneDTO(0,'','',0,'','',''
    ,0,'','','', 0,'','','','','','');

  segretari: SegretarioDTO[];

  aule: Aula[];

  constructor(private segService: SegnalazioneService,
              private segreteriaService: SegreteriaService,
              private aulaService: AulaService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              public datepipe: DatePipe ) { }

  ngOnInit() {
    this.segnalazione.stato = 'Aperto';
    this.segnalazione.data = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
    this.segnalazione.idDocente = +this.route.snapshot.paramMap.get('idDoc');
    this.getSegretari();
    this.getAule();
  }

  get diagnostic() {
    return JSON.stringify(this.segnalazione);
  }

  getSegretari() {
    this.segreteriaService.getAll().subscribe(data => this.segretari = data);
  }

  getAule() {
    this.aulaService.getAll().subscribe(data => this.aule = data);
  }

  onSubmit() {
    this.segService.newSegn(this.segnalazione).subscribe(data => this.segnalazione = data);
    Swal.fire(
      'Inserito!',
      'Segnalazione creata con successo',
      'success'
    );
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
