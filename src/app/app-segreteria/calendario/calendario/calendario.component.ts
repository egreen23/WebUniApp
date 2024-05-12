import { Component, OnInit } from '@angular/core';
import {CalendarioService} from '../../../services/calendario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor(private calserv: CalendarioService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  newCal(): void  {
    this.router.navigate(['calendario/newCalendario']);
  }

  goBack() {
    this.location.back();
  }
}
