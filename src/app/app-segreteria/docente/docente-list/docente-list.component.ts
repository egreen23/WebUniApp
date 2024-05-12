import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../../../services/docente.service';
import {DocenteDTO} from '../../../dto/docenteDTO';

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent implements OnInit {

  docenti: DocenteDTO[];

  constructor(private docService: DocenteService) { }

  ngOnInit() {
   this.getDocenti();
  }

  getDocenti() {
    this.docService.getAll().subscribe(data => this.docenti = data);
  }

}
