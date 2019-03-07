import { Component, OnInit } from '@angular/core';
import { Aula} from '../../model/aula';
import { AulaService} from '../aula.service';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aule: Aula[];


  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAule();
  }

  getAule(): void {
    this.aulaService.getAll()
      .subscribe(aule => this.aule = aule);
  }



}
