import { Component, OnInit } from '@angular/core';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import {Corsodistudio} from '../../../domain/corsodistudio';

@Component({
  selector: 'app-corso-list',
  templateUrl: './corso-list.component.html',
  styleUrls: ['./corso-list.component.css']
})
export class CorsoListComponent implements OnInit {

  corsi: Corsodistudio[];

  toogle = 'Tutti';

  constructor(private cdsService: CorsodistudioService) { }

  ngOnInit() {
    this.getCorsi();
  }

  getCorsi() {
    this.cdsService.getCdS().subscribe(data => this.corsi = data);
  }

  filt() {
    this.cdsService.getCdsbyTipo(this.toogle).subscribe(data => this.corsi = data);
  }
}
