import { Component, OnInit } from '@angular/core';
import {SegnalazioneDTO} from '../../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../../services/segnalazione.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-segnalazione-list',
  templateUrl: './segnalazione-list.component.html',
  styleUrls: ['./segnalazione-list.component.scss']
})
export class SegnalazioneListComponent implements OnInit {

  segnalazioni: SegnalazioneDTO[];

  id: number;

  toogle = 'Tutte';

  constructor(private segService: SegnalazioneService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('idSegr');
    this.getSegnalazioni();

  }

  getSegnalazioni() {
/*
    this.segService.getAll().subscribe(data => this.segnalazioni = data);
*/
    this.segService.getbySegr(this.id).subscribe(data => this.segnalazioni = data);

  }

  filt() {
    this.segService.getbyStato(this.id, this.toogle).subscribe(data => this.segnalazioni = data);
  }

  goBack() {
    this.location.back();
  }
}
