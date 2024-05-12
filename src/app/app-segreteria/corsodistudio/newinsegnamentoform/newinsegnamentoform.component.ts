import { Component, OnInit } from '@angular/core';
import {Insegnamento} from '../../../domain/insegnamento';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import {DocenteService} from '../../../services/docente.service';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import {DocenteDTO} from '../../../dto/docenteDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from "sweetalert2";
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-newinsegnamentoform',
  templateUrl: './newinsegnamentoform.component.html',
  styleUrls: ['./newinsegnamentoform.component.scss']
})
export class NewinsegnamentoformComponent implements OnInit {

  inseg = new Insegnamento('',0,'','',0,0, '');
  docenti: DocenteDTO[];
  corsi: Corsodistudio[];
  currentcorso: Corsodistudio;

  constructor(private insService: InsegnamentoService,
              private docService: DocenteService,
              private cdsService: CorsodistudioService,
              private route: ActivatedRoute,
              private db: AngularFirestore,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getDocenti();
    this.getCorsi();
    this.inseg.idCorsoDiStudio = +this.route.snapshot.paramMap.get('id');

  }

  get diagnostics() {
    return JSON.stringify(this.inseg);
  }

  getDocenti() {
    this.docService.getAll().subscribe(data => this.docenti = data);
  }

  getCorsi() {
    this.cdsService.getCdS().subscribe(data => this.corsi = data);
    this.cdsService.getCdSbyId(+this.route.snapshot.paramMap.get('id')).subscribe(data => this.currentcorso = data);
  }

  onSubmit() {

    /*const substring = this.inseg.professore.split(' ');
    for (let j = 0; j < this.docenti.length; j++) {
      if (this.docenti[j].nome === substring[0] && this.docenti[j].cognome === substring[1]) {
        this.inseg.idDocente = this.docenti[j].idDocente;
        break;
      }
    }*/

    this.insService.newInsegnamento(this.inseg).subscribe(data => {
      this.inseg = data;

      console.log(this.inseg);

      this.db.collection('publicChat')
        .add({

          chatId: this.db.createId(),
          chatName: this.inseg.nome,
          idCorsodistudio: this.route.snapshot.paramMap.get('id'),
          idInsegnamento: this.inseg.idInsegnamento.toString(),


        }).then(then => {
        console.log(then);
      });
    });
    Swal.fire(
      'Inserito!',
      'Insegnamento inserito con successo',
      'success'
    );
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
