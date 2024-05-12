import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-corsodistudio',
  templateUrl: './corsodistudio.component.html',
  styleUrls: ['./corsodistudio.component.css']
})
export class CorsodistudioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  newCorso(): void  {
    this.router.navigate(['/corsodistudio/newCorso']);
  }

  goBack() {
    this.location.back();
  }
}
