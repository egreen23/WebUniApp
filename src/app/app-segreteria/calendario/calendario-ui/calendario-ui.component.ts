import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from 'ng-fullcalendar';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import Swal from 'sweetalert2';
import {CalendarioService} from '../../../services/calendario.service';

@Component({
  selector: 'app-calendario-ui',
  templateUrl: './calendario-ui.component.html',
  // styleUrls: ['./calendario-ui.component.css']
})
export class CalendarioUiComponent implements OnInit {


  options: OptionsInput;
  eventsModel: any;
  tipo = this.route.snapshot.paramMap.get('tipo');


  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private calService: CalendarioService,
              public datepipe: DatePipe) { }

  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      /*events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],*/
      /*customButtons: {
        myCustomButton: {
          text: 'Aggiungi Comp',
          click: function() {
            // alert('clicked the custom button!');
            // Swal.fire('Ops','li morti toi', 'error');


          }
        }
      },*/
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        // right: 'dayGridMonth,timeGridWeek,timeGridDay'
        right: 'dayGridMonth, prevYear, nextYear'
      },
      /*dateClick: function(info) {
        alert('Clicked on: ' + info.dateStr);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('Current view: ' + info.view.type);
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = 'red';
        this.router.navigate(['/newLezione']);
      },*/
      /*
      eventClick: function(info) {
        // alert('Event: ' + info.event.title);
        // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        // alert('View: ' + info.view.type);
        Swal.fire({
          title: 'Dettagli',
          type: 'info',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Elimina',
          cancelButtonText: 'Annulla',
          html:
            `<p>${info.event.title}</p><br>` + `Inizio: <p>${info.event.start}</p><br> ` + ` Fine: <p>${info.event.end}</p>`
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Eliminata!',
              'Lezione elminiata con successo',
              'success'
            );
          }
        });
      },*/
      plugins: [ dayGridPlugin, interactionPlugin ],
      // events: `http://localhost:8080/UniApp/lez/getLezioniByCalendario/${this.route.snapshot.paramMap.get('id')}`,
      eventSources: [
        `http://localhost:8080/UniApp/lez/getLezioniByCalendario/${this.route.snapshot.paramMap.get('id')}`,
        `http://localhost:8080/UniApp/esame/getEsameByCalendario/${this.route.snapshot.paramMap.get('id')}`
      ],
      hiddenDays: [0],
      navLinks: true
    };

  }
  eventClick(model) {
   // console.log(model.event.title);
    /*Swal.fire({
      title: 'Dettagli',
      type: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Elimina',
      cancelButtonText: 'Annulla',
      html:
        `<p>${model.event.title}</p><br>` + `Inizio: <p>${this.datepipe.transform(model.event.start, 'yyyy-MM-dd HH:mm')}</p><br> `
        + ` Fine: <p>${this.datepipe.transform(model.event.end, 'yyyy-MM-dd HH:mm')}</p>`
    }).then((result) => {
      if (result.value) {
        const tipo = this.route.snapshot.paramMap.get('tipo');
        if (tipo === 'Lezione') {
          this.deleteLezione(+model.event.id);
          Swal.fire(
            'Eliminata!',
            'Lezione elminiata con successo',
            'success'
          );
        } else {
          this.deleteEsame(+model.event.id);
          Swal.fire(
            'Eliminata!',
            'Esame elminiato con successo',
            'success'
          );
        }

      }
    });*/
    Swal.fire({
      title: 'Dettagli',
      type: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Modifica',
      cancelButtonText: 'Annulla',
      html:
        `<p>${model.event.title}</p><br>` + `Inizio: <p>${this.datepipe.transform(model.event.start, 'yyyy-MM-dd HH:mm')}</p><br> `
        + ` Fine: <p>${this.datepipe.transform(model.event.end, 'yyyy-MM-dd HH:mm')}</p>`
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['update', model.event.id, this.tipo]);

      }
    });
  }

  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    // console.log(model.dateStr);
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`calendario/newlezione/${this.route.snapshot.paramMap.get('idCds')}/${id}
    /${model.dateStr}`]);
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }






}
