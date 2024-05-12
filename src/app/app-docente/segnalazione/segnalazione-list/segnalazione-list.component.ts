import { Component, OnInit } from '@angular/core';
import {SegnalazioneDTO} from '../../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../../services/segnalazione.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';

@Component({
  selector: 'app-segnalazione-list',
  templateUrl: './segnalazione-list.component.html',
  styleUrls: ['./segnalazione-list.component.scss']
})
export class SegnalazioneListComponent implements OnInit {

  segnalazioni: SegnalazioneDTO[];

  toogle = 'Tutte';


  constructor(private segService: SegnalazioneService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.getSegn();
  }

  getSegn() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.segService.getbyDoc(id).subscribe(data => this.segnalazioni = data);
  }

  newSegnalazione() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`segnaladoc/newsegn/${id}`]);
  }

  goBack() {
    this.location.back();
  }

  filt() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.segService.getbyStatoDoc(id, this.toogle).subscribe(data => this.segnalazioni = data);
  }

}
