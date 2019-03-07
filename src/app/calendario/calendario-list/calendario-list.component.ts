import { Component, OnInit } from '@angular/core';
import {Calendario} from '../../model/calendario';
import {CalendarioService} from '../calendario.service';

@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html',
  styleUrls: ['./calendario-list.component.css']
})
export class CalendarioListComponent implements OnInit {

  calendari: Calendario[];

  constructor(private calService: CalendarioService) { }

  ngOnInit() {
    this.getCalendari();
  }

  getCalendari(): void {
    this.calService.getCalendari()
      .subscribe(calendari => this.calendari = calendari);
  }

}
