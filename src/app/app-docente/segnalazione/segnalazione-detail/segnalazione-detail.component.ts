import { Component, OnInit } from '@angular/core';
import {SegnalazioneDTO} from '../../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../../services/segnalazione.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-segnalazione-detail',
  templateUrl: './segnalazione-detail.component.html',
  styleUrls: ['./segnalazione-detail.component.scss']
})
export class SegnalazioneDetailComponent implements OnInit {

  segnalazione = new SegnalazioneDTO(0,'','',0,'','',''
    ,0,'','','', 0,'','','','','','');

  segnAula: SegnalazioneDTO[];

  visualizza = false;

  constructor(private segService: SegnalazioneService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getSegnalazione();
  }

  get diagnostic() {
    return JSON.stringify(this.segnalazione);
  }

  getSegnalazione() {
    const id = +this.route.snapshot.paramMap.get('idseg');
    this.segService.getOne(id).subscribe(data => {
      this.segnalazione = data;

      this.segService.getbyAula(this.segnalazione.idAula).subscribe(data2 => this.segnAula = data2);
    });
  }

  goBack() {
    this.location.back();
  }

  setTrue() {
    this.visualizza = true;
  }



}
