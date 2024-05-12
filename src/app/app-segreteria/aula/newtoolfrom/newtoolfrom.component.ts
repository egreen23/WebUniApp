import { Component, OnInit } from '@angular/core';
import {Tool} from '../../../domain/tool';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ToolService} from '../../../services/tool.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-newtoolfrom',
  templateUrl: './newtoolfrom.component.html',
  styleUrls: ['./newtoolfrom.component.scss']
})
export class NewtoolfromComponent implements OnInit {

  newTool = new Tool(0,'','', false);

  constructor(private route: ActivatedRoute,
              private location: Location,
              private toolService: ToolService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.toolService.newTool(this.newTool).subscribe(data => {
      this.newTool = data;
      Swal.fire({
        title: 'Creato!',
        text: 'Tool creato con successo',
        type: 'success',
        timer: 1500
      });
    });
    this.location.back();
  }

}
