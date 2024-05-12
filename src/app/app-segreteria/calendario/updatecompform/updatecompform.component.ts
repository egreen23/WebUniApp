import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CalendarioService} from '../../../services/calendario.service';
import {Comp} from '../../../domain/comp';
import {Lezione} from '../../../domain/lezione';
import {Esame} from '../../../domain/esame';
import {CompDTO} from '../../../dto/compDTO';
import {Aula} from '../../../domain/aula';
import {AulaService} from '../../../services/aula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecompform',
  templateUrl: './updatecompform.component.html',
  styleUrls: ['./updatecompform.component.scss']
})
export class UpdatecompformComponent implements OnInit {


  id = +this.route.snapshot.paramMap.get('idLez');
  tipo = this.route.snapshot.paramMap.get('tipo');

  comp = new CompDTO('','',0,'','','',0,0,'',''
  , '','','',0);

  /*lezione = new Lezione(0,'','','',0,0, 0);
  esame = new Esame(0,'','','',0 ,0, 0);*/

  aule: Aula[];


  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              public calService: CalendarioService,
              public aulaService: AulaService) { }

  ngOnInit() {
    this.getComp();
    this.getAule();
  }

  getComp() {
    if (this.tipo === 'Lezione') {
      this.calService.getLezionebyId(this.id).subscribe(data => this.comp = data);
    } else {
      this.calService.getEsamebyId(this.id).subscribe(data2 => this.comp = data2);
    }
  }

  getAule() {
    this.aulaService.getAll().subscribe(data => this.aule = data);
  }

  deleteLezione(id: number): void {
    this.calService.deleteLezione(id).subscribe();
    return;
  }

  deleteEsame(id: number): void {
    this.calService.deleteEsame(id).subscribe();
    return;
  }

  deleteComp() {
    if (this.tipo === 'Lezione') {
      this.deleteLezione(this.id);
      Swal.fire({
        title:  'Eliminata!',
        text: 'Lezione elminiata con successo',
        type: 'success',
        timer: 1500
      });
    } else {
      this.deleteEsame(this.id);
      Swal.fire({
        title:  'Eliminata!',
        text: 'Esame elminiato con successo',
        type: 'success',
        timer: 1500
      });
    }
    this.location.back();
  }

  onSubmit() {
    if (this.tipo === 'Lezione') {
        let lez = new Lezione(this.id, this.comp.orarioInizio, this.comp.orarioFine, this.comp.data,
        this.comp.idAula, this.comp.idCalendario, this.comp.idInsegnamento);
        this.calService.updateAulaLez(lez).subscribe(data => lez = data);
        Swal.fire({
          title:  'Aggiornato!',
          text: 'Aula aggiornata con successo',
          type: 'success',
          timer: 1500
        });
    } else {
      let esame = new Esame(this.id, this.comp.orarioInizio, this.comp.orarioFine, this.comp.data,
        this.comp.idAula, this.comp.idCalendario, this.comp.idInsegnamento);
      this.calService.updateAulaEsa(esame).subscribe(data => esame = data);
      Swal.fire({
        title:  'Aggiornato!',
        text: 'Aula aggiornata con successo',
        type: 'success',
        timer: 1500
      });
    }
    for (let k = 0; k < this.aule.length; k++) {
      if (+this.comp.idAula === this.aule[k].idAula) {
        this.comp.nomeAula = this.aule[k].nome;
        break;
      }
    }
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
