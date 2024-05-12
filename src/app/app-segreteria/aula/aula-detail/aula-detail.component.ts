import {Component, OnInit} from '@angular/core';
import {Aula} from '../../../domain/aula';
import {AulaService} from '../../../services/aula.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ToolDTO} from '../../../dto/toolDTO';
import {ToolService} from '../../../services/tool.service';
import Swal from "sweetalert2";
import {Tool} from '../../../domain/tool';


@Component({
  selector: 'app-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: ['./aula-detail.component.css']
})
export class AulaDetailComponent implements OnInit {

  room = new Aula(1, '', 1, 1, '', '');

  tools: ToolDTO[];

  strumenti: Tool[];

  removed: ToolDTO[] = [];

  newTool = new ToolDTO(0,0,0,'','');

  constructor(private aulaService: AulaService,
              private toolService: ToolService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    this.getAula();
    this.getTools();
    this.newTool.idAula = +this.route.snapshot.paramMap.get('id');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.room); }

  get diagnostic2() { return JSON.stringify(this.newTool); }


  getAula(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.aulaService.getAulabyId(id)
      .subscribe(room => {
        this.room = room;
        this.toolService.getbyIdAula(this.room.idAula).subscribe(data => this.tools = data);
      });

  }

  getTools() {
    this.toolService.getAll().subscribe(data => this.strumenti = data);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.aulaService.updateAula(this.room).subscribe(room => this.room = room);
    Swal.fire({
      title:  'Aggiornata!',
      text: 'Aula aggiornata con successo',
      type: 'success',
      timer: 1500
    });
  }

  deleteTool() {
    for (let i = 0; i < this.tools.length; i++) {
      if (this.tools[i].checked === true) {
        this.removed.push(this.tools[i]);
      }
    }
    if (this.removed.length === 0) {
      return;
    }
    if (this.removed.length === 1) {
      this.toolService.deleteToolfromAula(this.removed[0].idAttrezzatura).subscribe();
      Swal.fire({
        title:  'Eliminato!',
        text: 'Tool rimosso con successo',
        type: 'success',
        timer: 1500
      });

    } else {
      this.toolService.deleteAllToolsfromAula(this.removed).subscribe();
      Swal.fire({
        title: 'Eliminati!',
        text: 'Tools rimossi con successo',
        type: 'success',
        timer: 1500
      });

    }
    for ( let k = 0 ; k < this.removed.length; k++) {
      for (let j = 0; j < this.tools.length; j++) {
        if (this.removed[k].idAttrezzatura === this.tools[j].idAttrezzatura) {
          this.tools.splice(j,1);
        }
      }
    }

    // svuotare dopo aver usato il metodo perchè i calendari rimangono nell'array
    this.removed = [];

  }

  onSubmitTool() {
    for (let j = 0; j < this.strumenti.length; j++) {
      if (this.strumenti[j].nome === this.newTool.nomeTool) {
        this.newTool.idTool = this.strumenti[j].idTool;
        this.newTool.descrizioneTool = this.strumenti[j].descrizione;
        break;
      }
    }

    this.toolService.addTooltoAula(this.newTool).subscribe(data => this.newTool = data);

    Swal.fire({
      title: 'Inserito!',
      text: 'Tool inserito con successo',
      type: 'success',
      timer: 1500
    });

    this.tools.push(this.newTool);
    this.location.back();
  }



}
