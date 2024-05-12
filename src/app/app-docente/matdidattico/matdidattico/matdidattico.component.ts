import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-matdidattico',
  templateUrl: './matdidattico.component.html',
  styleUrls: ['./matdidattico.component.scss']
})
export class MatdidatticoComponent implements OnInit {

  // id = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

}
