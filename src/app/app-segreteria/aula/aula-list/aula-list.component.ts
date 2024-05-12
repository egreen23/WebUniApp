import { Component, OnInit } from '@angular/core';
import { Aula} from '../../../domain/aula';
import { AulaService} from '../../../services/aula.service';
import {Comp} from '../../../domain/comp';
import Swal from "sweetalert2";
import {Tool} from '../../../domain/tool';
import {ToolService} from '../../../services/tool.service';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aule: Aula[];

  delAule: Aula[] = [];



  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAule();

  }

  getAule(): void {
    this.aulaService.getAll()
      .subscribe(aule => this.aule = aule);
  }


  deleteAllAule() {
    for (let i = 0; i < this.aule.length; i++) {
      if (this.aule[i].checked === true) {
        this.delAule.push(this.aule[i]);
      }
    }
    if (this.delAule.length === 0) {
      return;
    }
    Swal.fire({
      title: 'Attenzione',
      type: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annulla',
      text: 'Le aule selezionate potrebbero essere contenute nelle lezioni/esami dei calendari presenti nel database e verranno eliminate ' +
        'insieme alle aule. Procedere comunque?'
    }).then((result) => {
        if (result.value) {
          if (this.delAule.length === 1) {
            this.aulaService.deleteAula(this.delAule[0].idAula).subscribe();
            Swal.fire(
              'Eliminata!',
              'Aula eliminata con successo',
              'success'
            );
          } else {
            this.aulaService.deleteAllAule(this.delAule).subscribe();
            Swal.fire(
              'Eliminate!',
              'Aule eliminate con successo',
              'success'
            );
            // elimina dall'array dei calendari i calendari rimossi

          }
          for ( let k = 0 ; k < this.delAule.length; k++) {
            for (let j = 0; j < this.aule.length; j++) {
              if (this.delAule[k].idAula === this.aule[j].idAula) {
                this.aule.splice(j,1);
              }
            }
          }

          // svuotare dopo aver usato il metodo perchè i calendari rimangono nell'array
          this.delAule = [];
        }
      });
  }
}
