import { Component, OnInit } from '@angular/core';
import {DocenteDTO} from '../../../dto/docenteDTO';
import {DocenteService} from '../../../services/docente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newdocenteform',
  templateUrl: './newdocenteform.component.html',
  styleUrls: ['./newdocenteform.component.scss']
})
export class NewdocenteformComponent implements OnInit {

  doc = new DocenteDTO(0,'','','','','','','',0,'');

  constructor(private docService: DocenteService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  get diagnostics() {
    return JSON.stringify(this.doc);
  }

  onSubmit() {
    this.docService.newDocente(this.doc).subscribe(data => this.doc = data);
    Swal.fire({
      title:  'Inserito!',
      text: 'Docente creato con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
