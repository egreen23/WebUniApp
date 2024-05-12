import { Component, OnInit } from '@angular/core';
import {Corsodistudio} from '../../../domain/corsodistudio';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CorsodistudioService} from '../../../services/corsodistudio.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-corso-detail',
  templateUrl: './corso-detail.component.html',
  styleUrls: ['./corso-detail.component.css']
})
export class CorsoDetailComponent implements OnInit {

  //corso = new Corsodistudio(0,'','', '');
  corso: Corsodistudio;

  constructor(private corsoService: CorsodistudioService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getCorso();
  }

  getCorso() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.corsoService.getCdSbyId(id).subscribe(data => this.corso = data);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.corsoService.update(this.corso).subscribe(data => {
      this.corso = data;
      Swal.fire({
        title:  'Eseguito!',
        text: 'Corso aggiornato con successo',
        type: 'success',
        timer: 1500
      });
    });
    this.location.back();
  }
}
