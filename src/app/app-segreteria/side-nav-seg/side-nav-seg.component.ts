import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-side-nav-seg',
  templateUrl: './side-nav-seg.component.html',
  styleUrls: ['./side-nav-seg.component.scss']
})
export class SideNavSegComponent implements OnInit {
  @Input() id: number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
