import {Component, Input, OnInit} from '@angular/core';
import {CalendarioDTO} from '../../../dto/calendarioDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CalendarioService} from '../../../services/calendario.service';

@Component({
  selector: 'app-calendario-detail',
  templateUrl: './calendario-detail.component.html',
  styleUrls: ['./calendario-detail.component.css']
})
export class CalendarioDetailComponent implements OnInit {

  // cal = new CalendarioDTO(0, ' ', ' ', ' ', [], '', '');

  cal: CalendarioDTO;



  constructor(private calService: CalendarioService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

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

  goBack(): void {
    this.location.back();
  }


}
