import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Aula} from '../../../domain/aula';
import {AulaService} from '../../../services/aula.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-aula-search',
  templateUrl: './aula-search.component.html',
  styleUrls: ['./aula-search.component.scss']
})
export class AulaSearchComponent implements OnInit {

  aule$: Observable<Aula[]>;

  private searchTerms = new Subject<string>();

  constructor(private aulaService: AulaService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.aule$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.aulaService.searchAula(term)),
    );
  }



}
