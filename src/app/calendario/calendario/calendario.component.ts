import { Component, OnInit } from '@angular/core';
import {Lezione} from '../../model/lezione';
import {CalendarioService} from '../calendario.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  lesson: Lezione

  constructor(private calserv: CalendarioService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

  addLezione() {
    this.calserv.newLezione(this.lesson).subscribe(lesson => this.lesson = lesson);
  }
}
