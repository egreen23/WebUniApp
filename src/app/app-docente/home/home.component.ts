import { Component, OnInit } from '@angular/core';
import {InsegnamentoDTO} from '../../dto/insegnamentoDTO';
import {InsegnamentoService} from '../../services/insegnamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SegnalazioneDTO} from '../../dto/segnalazioneDTO';
import {SegnalazioneService} from '../../services/segnalazione.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  insegnamenti: InsegnamentoDTO[];
  idDoc: number;

  segnalazioni: SegnalazioneDTO[];

  displayedColumns2: string[] = ['Data', 'Titolo', 'Stato'];


  constructor(private insService: InsegnamentoService,
              private route: ActivatedRoute,
              private segnService: SegnalazioneService,
              private location: Location,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.idDoc =  +this.route.snapshot.paramMap.get('id');
    this.getInsegnamenti();
    this.getSegnalazioni();
  }

  getInsegnamenti() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.insService.getbyIdDoc(this.idDoc).subscribe(data => this.insegnamenti = data);
  }

  getSegnalazioni() {
    this.segnService.getbyDoc(this.idDoc).subscribe(data => {
      this.segnalazioni = data;
      let done = false;
      while (!done) {
        if (this.segnalazioni.length > 5) {
          let c = this.segnalazioni.pop();
        } else {
          done = true;
        }
      }

    });
  }

  logout() {
    this.authService.logout();
  }

}
