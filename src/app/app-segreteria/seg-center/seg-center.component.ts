import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-seg-center',
  templateUrl: './seg-center.component.html',
  styleUrls: ['./seg-center.component.scss']
})
export class SegCenterComponent implements OnInit {

  idSegr: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.idSegr = +this.route.snapshot.paramMap.get('id');
  }




}
