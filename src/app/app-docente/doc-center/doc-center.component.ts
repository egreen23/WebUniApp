import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-doc-center',
  templateUrl: './doc-center.component.html',
  styleUrls: ['./doc-center.component.scss']
})
export class DocCenterComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
