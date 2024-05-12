import { Component, OnInit } from '@angular/core';
import {Calendario} from '../../domain/calendario';
import {Corsodistudio} from '../../domain/corsodistudio';
import {CorsodistudioService} from '../../services/corsodistudio.service';
import {CalendarioService} from '../../services/calendario.service';
import {SegnalazioneDTO} from '../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../services/segnalazione.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  calendari: Calendario[] = [];

  corsi: Corsodistudio[];

  id: number;

  segnalazioni: SegnalazioneDTO[];

  displayedColumns: string[] = ['Data', 'Corso', 'Tipo'];
  displayedColumns2: string[] = ['Data', 'Titolo', 'Stato'];

  constructor(private cdsService: CorsodistudioService,
              private calService: CalendarioService,
              private segnService: SegnalazioneService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getData();

  }

  getData() {

    this.cdsService.getCdS().subscribe(cds => {
      this.corsi = cds;
      this.calService.getAll().subscribe(cal => {
       this.calendari = cal;

       let done = false;
       while (!done) {
         if (this.calendari.length > 5) {
           let c = this.calendari.pop();
         } else {
           done = true;
         }
       }

       for (let i = 0; i < this.calendari.length; i++) {
         for (let j = 0; j < this.corsi.length; j++) {
           if (this.calendari[i].idCds === this.corsi[j].idcorsoDiStudio) {
             this.calendari[i].nomeCds = this.corsi[j].nome;
             break;
           }
         }
       }
      });
    });

    this.segnService.getbySegr(this.id).subscribe(data => {
      this.segnalazioni = data;
      let done = false;
      while (!done) {
        if (this.segnalazioni.length > 5) {
          let c = this.segnalazioni.pop();
        } else {
          done = true;
        }
      }

    });

  }



}
