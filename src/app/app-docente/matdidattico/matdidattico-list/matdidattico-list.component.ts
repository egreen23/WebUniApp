import { Component, OnInit } from '@angular/core';
import {MaterialeDTO} from '../../../dto/materialeDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatdidatticoService} from '../../../services/matdidattico.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';
import {InsegnamentoService} from '../../../services/insegnamento.service';

@Component({
  selector: 'app-matdidattico-list',
  templateUrl: './matdidattico-list.component.html',
  styleUrls: ['./matdidattico-list.component.scss']
})
export class MatdidatticoListComponent implements OnInit {

  materiale: MaterialeDTO[];

  id: number;
  inseg: InsegnamentoDTO;

  constructor(private matService: MatdidatticoService,
              private route: ActivatedRoute,
              private location: Location,
              private storage: AngularFireStorage,
              private insService: InsegnamentoService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('idIns');
    this.insService.getbyId(this.id).subscribe(data => this.inseg = data);
    this.getMateriale();
  }

  getMateriale() {
    this.matService.getbyIdIns(this.id).subscribe(data => {
      this.materiale = data;
      for(let i = 0; i < this.materiale.length; i++) {
        let ref = this.storage.ref(this.materiale[i].url);
        this.materiale[i].fburl = ref.getDownloadURL();
      }

    });
  }

  goBack() {
    this.location.back();
  }

  newMat() {
    const id = +this.route.snapshot.paramMap.get('idIns');

    this.router.navigate([`matdid/newmat/${id}`]);
  }
}
