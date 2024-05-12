import { Component, OnInit } from '@angular/core';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newcorsoform',
  templateUrl: './newcorsoform.component.html',
  styleUrls: ['./newcorsoform.component.scss']
})
export class NewcorsoformComponent implements OnInit {

  corso = new Corsodistudio(0, '', '', '');

  constructor(private cdsService: CorsodistudioService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
  }

  get diagnostics() {
    return JSON.stringify(this.corso);
  }

  onSubmit() {
    this.cdsService.newCorso(this.corso).subscribe(data => this.corso = data);
    Swal.fire({
      title: 'Creato!',
      text: 'Corso di studio creato con successo',
      type: 'success',
      timer: 1500
    });
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
