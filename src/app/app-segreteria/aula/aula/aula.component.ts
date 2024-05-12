import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  newAula(): void  {
    this.router.navigate(['/newaula']);
  }

  goBack() {
    this.location.back();
  }

  newTool() {
    this.router.navigate(['/newtool']);

  }
}

