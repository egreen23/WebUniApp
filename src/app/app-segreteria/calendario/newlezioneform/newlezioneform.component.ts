import {Component,  OnInit} from '@angular/core';
import {Comp} from '../../../domain/comp';
import {AulaService} from '../../../services/aula.service';
import {Aula} from '../../../domain/aula';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CalendarioService} from '../../../services/calendario.service';
import {CalendarioDTO} from '../../../dto/calendarioDTO';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newlezioneform',
  templateUrl: './newlezioneform.component.html',
  styleUrls: ['./newlezioneform.component.scss']
})
export class NewlezioneformComponent implements OnInit {

  newLezione = new Comp('', '', '', 0, 0, 0);
  newLezioneList: Comp[] = [ this.newLezione
  ];

  aule: Aula[];
  insegnamenti: InsegnamentoDTO[];
  idCds: number;
  iterate = false;
  cal: CalendarioDTO;

  constructor(private aulaService: AulaService,
              private insegService: InsegnamentoService,
              private calService: CalendarioService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.idCds = +this.route.snapshot.paramMap.get('idCds');
    this.getAule();
    this.getInsegnamenti();
    this.getCalendario();
    this.newLezioneList[0].data = this.route.snapshot.paramMap.get('date');
    this.newLezioneList[0].idCalendario = +this.route.snapshot.paramMap.get('idCal');
  }

  getAule(): void {
    this.aulaService.getAll()
      .subscribe(aule => this.aule = aule);

  }

  getCalendario(): void {
    this.calService.getCalendariobyId(+this.route.snapshot.paramMap.get('idCal'))
      .subscribe(data => this.cal = data);
  }

  getInsegnamenti(): void {
    this.insegService.getbyCds(this.idCds)
      .subscribe(inseg => this.insegnamenti = inseg);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {

    const hourstart = this.newLezione.orarioInizio.split(':');
    const hourend = this.newLezione.orarioFine.split(':');

    const orestart = +hourstart[0];

    const oreend = +hourend[0];

    if (orestart >= oreend) {
      Swal.fire(
        'Errore!',
        'Ricontrolla gli orari inseriti',
        'error'
      );
      return;
    }

    const datacomp = new Date(this.newLezione.data);
    const endcal =new Date(this.cal.dataFine);
    const startcal = new Date(this.cal.dataInizio);

    if (datacomp < startcal || datacomp > endcal) {

      Swal.fire(
        'Errore!',
        `Evento non rientra nel periodo del semestre (${this.cal.dataInizio} - ${this.cal.dataFine}) `  ,
        'error'
      );
      this.location.back();
      return;

    }




    if (this.iterate === true) {
      const dayLez = new Date(this.newLezioneList[0].data).getDay();
      const dateLez = new Date(this.newLezioneList[0].data);
      const dateCalstart = new Date(this.cal.dataInizio);
      const dateCalend = new Date(this.cal.dataFine);
      let done = false;
      // trova il primo giorno del calendario disponibile per inserire la lezione
      while (!done) {
        if (dateCalstart.getDay() === dayLez) {
          done = true;
        } else {
          dateCalstart.setDate(dateCalstart.getDate() + 1);
        }
      }
      done = false;
      // riempie l'array delle lezioni per tutto il semestre
      while (!done) {

        if (dateCalstart >= dateCalend) {
          done = true;
          continue;
        }
        if (dateCalstart.getDate() === dateLez.getDate()) {
          dateCalstart.setDate(dateCalstart.getDate() + 7);
          continue;
        }
        const newdate = this.datepipe.transform(dateCalstart, 'yyyy-MM-dd');
        let lez = new Comp(this.newLezioneList[0].orarioInizio, this.newLezioneList[0].orarioFine, newdate, this.newLezioneList[0].idAula,
          this.newLezioneList[0].idCalendario, this.newLezioneList[0].idInsegnamento);
        this.newLezioneList.push(lez);

        dateCalstart.setDate(dateCalstart.getDate() + 7);

      }

      if (this.cal.tipo === 'Lezione') {
        this.calService.saveAllLezione(this.newLezioneList).subscribe(list => this.newLezioneList = list);
        Swal.fire(
          'Inserite!',
          'Lezioni inserite con successo',
          'success'
        );
      } else {
        this.calService.saveAllEsame(this.newLezioneList).subscribe(list => this.newLezioneList = list);Swal.fire(
          'Inserite!',
          'Esami inseriti con successo',
          'success'
        );
      }


    } else {
      if (this.cal.tipo === 'Lezione') {
        this.calService.newLezione(this.newLezioneList[0]).subscribe(lez => this.newLezioneList[0] = lez);
        Swal.fire(
          'Inserita!',
          'Lezione inserita con successo',
          'success'
        );
      } else {
        this.calService.newEsame(this.newLezioneList[0]).subscribe(lez => this.newLezioneList[0] = lez);
        Swal.fire(
          'Inserito!',
          'Esame inserito con successo',
          'success'
        );
      }

    }

    this.location.back();

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newLezioneList[0]); }

}
