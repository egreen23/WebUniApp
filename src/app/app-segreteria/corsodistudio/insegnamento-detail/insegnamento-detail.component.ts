import { Component, OnInit } from '@angular/core';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from "sweetalert2";
import {DocenteDTO} from '../../../dto/docenteDTO';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {DocenteService} from '../../../services/docente.service';

@Component({
  selector: 'app-insegnamento-detail',
  templateUrl: './insegnamento-detail.component.html',
  styleUrls: ['./insegnamento-detail.component.css']
})
export class InsegnamentoDetailComponent implements OnInit {

  insegnamento = new InsegnamentoDTO(0, '', 0, '', '', 0, 0,
    '', '', '', '', '');
  docenti: DocenteDTO[];


  constructor(private insService: InsegnamentoService,
              private docService: DocenteService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.getInsegnamento();
    this.getDocenti();
  }

  get diagnostics() {
    return JSON.stringify(this.insegnamento);
  }

  getInsegnamento() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.insService.getbyId(id).subscribe(data => this.insegnamento = data);
  }

  getDocenti() {
    this.docService.getAll().subscribe(data => this.docenti = data);
  }

  onSubmit() {
    /*const substring = this.insegnamento.professore.split(' ');
    for (let j = 0; j < this.docenti.length; j++) {
      if (this.docenti[j].nome === substring[0] && this.docenti[j].cognome === substring[1]) {
        this.insegnamento.idDocente = this.docenti[j].idDocente;
        break;
      }
    }*/

    this.insService.updateInsegnamento(this.insegnamento).subscribe(data => this.insegnamento = data);
    Swal.fire({
      title:  'Aggiornato!',
      text: 'Insegnamento aggiornato con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();

  }

  goBack() {
    this.location.back();
  }
}
