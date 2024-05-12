import { Component, OnInit } from '@angular/core';
import {DocenteDTO} from '../../../dto/docenteDTO';
import {DocenteService} from '../../../services/docente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-docente-detail',
  templateUrl: './docente-detail.component.html',
  styleUrls: ['./docente-detail.component.css']
})
export class DocenteDetailComponent implements OnInit {

  doc = new DocenteDTO(0,'','','','','','','',
    0,'');

  insegnamenti: InsegnamentoDTO[];

  constructor(private docService: DocenteService,
              private insService: InsegnamentoService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {

    this.getDocente();
  }

  get diagnostic() {
    return JSON.stringify(this.doc);
  }

  getDocente() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.docService.getbyMatricola(id).subscribe(data => {
      this.doc = data;
      this.insService.getbyIdDoc(this.doc.idDocente).subscribe(data2 => this.insegnamenti = data2);
    });
  }

  onSubmit() {
    this.docService.updateDoc(this.doc).subscribe(data => this.doc = data);
    Swal.fire({
      title:  'Aggiornato!',
      text: 'Docente modificato con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
