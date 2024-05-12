import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AulaService} from '../../../services/aula.service';
import {Aula} from '../../../domain/aula';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newaulaform',
  templateUrl: './newaulaform.component.html',
  styleUrls: ['./newaulaform.component.scss']
})
export class NewaulaformComponent implements OnInit {

  newAula = new Aula(0,'', 0, 0, '','');

  constructor(private route: ActivatedRoute,
              private location: Location,
              private aulaService: AulaService) { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newAula); }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.aulaService.newAula(this.newAula).subscribe(data => {
      this.newAula = data;
      Swal.fire(
        'Creata!',
        'Aula creata con successo',
        'success'
      );
    });
    this.location.back();
  }
}
