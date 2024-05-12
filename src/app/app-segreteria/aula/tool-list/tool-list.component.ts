import { Component, OnInit } from '@angular/core';
import {Tool} from '../../../domain/tool';
import {ToolService} from '../../../services/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  tools: Tool[];


  constructor(private toolService: ToolService) { }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    this.toolService.getAll().subscribe(data => this.tools = data);
  }

  deleteAll() {

  }

}
