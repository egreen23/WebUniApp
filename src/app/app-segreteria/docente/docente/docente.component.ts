import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private location: Location,
               private router: Router) { }

  ngOnInit() {
  }

  newDocente() {
    this.router.navigate(['newDoc']);
  }

  goBack() {
    this.location.back();
  }
}
