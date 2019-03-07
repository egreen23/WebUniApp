import {Component, Input, OnInit} from '@angular/core';
import {Aula} from '../../model/aula';
import {AulaService} from '../aula.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: ['./aula-detail.component.css']
})
export class AulaDetailComponent implements OnInit {

  room: Aula;

  constructor(private aulaService: AulaService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    this.getAula();
  }

  getAula(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.aulaService.getAulabyId(id)
      .subscribe(room => this.room = room);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.aulaService.updateAula(this.room).subscribe(room => this.room = room);
  }

}
