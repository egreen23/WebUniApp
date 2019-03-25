import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService} from '../event.service';
import {Calendario} from '../../model/calendario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Calendarevent} from '../../model/calendarevent';
import {Icalendario} from '../../interfaces/icalendario';

@Component({
  selector: 'app-calendario-ui',
  templateUrl: './calendario-ui.component.html',
  styleUrls: ['./calendario-ui.component.css']
})
export class CalendarioUIComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  events = null;
  mycal: Icalendario = { idCalendario: 0, tipo: '', lezione: [], anno: '', dataFine: '', dataInizio: '', semestre: ''};
  calendario: any;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: EventService,
              private route: ActivatedRoute,
              private location: Location) { }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.mycal); }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      // events: []
      // events: 'http://localhost:8080/UniApp/lez/getLezioniByCalendario/1'
      events: `http://localhost:8080/UniApp/lez/getLezioniByCalendario/${this.route.snapshot.paramMap.get('id')}`
    };
  }
  loadevents() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvents(id).subscribe(data => this.mycal = data);
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }


}
