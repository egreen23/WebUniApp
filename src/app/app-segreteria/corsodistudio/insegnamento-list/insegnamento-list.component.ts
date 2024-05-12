import {Component, Input, OnInit} from '@angular/core';
import {InsegnamentoDTO} from '../../../dto/insegnamentoDTO';
import {InsegnamentoService} from '../../../services/insegnamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-insegnamento-list',
  templateUrl: './insegnamento-list.component.html',
  styleUrls: ['./insegnamento-list.component.css']
})
export class InsegnamentoListComponent implements OnInit {

  @Input() id: number;
  insegnamenti: InsegnamentoDTO[];

  constructor(private insService: InsegnamentoService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getInsegnamenti();
  }

  getInsegnamenti() {
    this.insService.getbyCds(this.id).subscribe(data => this.insegnamenti = data);
  }

  newInseg() {
    this.router.navigate([`corsodistudio/newInseg/${this.id}`]);
  }
}
