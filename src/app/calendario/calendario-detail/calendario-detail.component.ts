import {Component, Input, OnInit} from '@angular/core';
import {Calendario} from '../../model/calendario';

@Component({
  selector: 'app-calendario-detail',
  templateUrl: './calendario-detail.component.html',
  styleUrls: ['./calendario-detail.component.css']
})
export class CalendarioDetailComponent implements OnInit {

  @Input() idCalendario: number;
  myCal: Calendario;

  constructor() { }

  ngOnInit() {
   //this.getCalendariobyId()
  }

  /*
  getCalendariobyId(): void {
    this.calService.getCalendari()
      .subscribe(calendari => this.calendari = calendari);
  }*/
}
