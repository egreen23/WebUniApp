import {Component, OnInit} from '@angular/core';
import {SegnalazioneDTO} from '../../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../../services/segnalazione.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-segnalazione-detail',
  templateUrl: './segnalazione-detail.component.html',
  styleUrls: ['./segnalazione-detail.component.scss']
})
export class SegnalazioneDetailComponent implements OnInit {

  segnalazione = new SegnalazioneDTO(0,'','',0,'','',''
  ,0,'','','', 0,'','','','','', '');



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
    const id = +this.route.snapshot.paramMap.get('id');
    this.segService.getOne(id).subscribe(data => this.segnalazione = data);
  }

  onSubmit() {

    if (this.segnalazione.stato === 'Rifiutata' && (this.segnalazione.nota === null || this.segnalazione.nota.length === 0)) {
      Swal.fire({
        title: 'Errore!',
        text: 'Se la segnalazione è rifiutata devi inserire una motivazione in "Nota" ',
        type: 'error'
      });
      return;
    }

    this.segService.update(this.segnalazione).subscribe(data => this.segnalazione = data);
    Swal.fire({
      title:  'Aggiornata!',
      text: 'Seganlazione aggiornata con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();


  }

  goBack() {
    this.location.back();
  }


}
