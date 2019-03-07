import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService} from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user =  new User;
  constructor() { }

  ngOnInit() {

  }

  /*getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }*/

}
