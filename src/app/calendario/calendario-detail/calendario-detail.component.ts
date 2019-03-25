import {Component, Input, OnInit} from '@angular/core';
import {Calendario} from '../../model/calendario';
import {Aula} from '../../model/aula';
import {AulaService} from '../../aula/aula.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CalendarioService} from '../calendario.service';

@Component({
  selector: 'app-calendario-detail',
  templateUrl: './calendario-detail.component.html',
  styleUrls: ['./calendario-detail.component.css']
})
export class CalendarioDetailComponent implements OnInit {

  cal = new Calendario(0, ' ', ' ', ' ', [], '', '');



  constructor(private calService: CalendarioService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
   this.getCalendario();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cal); }

  getCalendario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.calService.getCalendariobyId(id)
      .subscribe(calendario => this.cal = calendario);
  }

  load(): void {
    console.log(this.cal.anno);
  }
}
