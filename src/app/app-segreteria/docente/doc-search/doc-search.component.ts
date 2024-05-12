import { Component, OnInit } from '@angular/core';
import {DocenteDTO} from '../../../dto/docenteDTO';
import {Observable, Subject} from 'rxjs';
import {DocenteService} from '../../../services/docente.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.scss']
})
export class DocSearchComponent implements OnInit {

  doc$: Observable<DocenteDTO[]>;
  private searchTerms = new Subject<string>();


  constructor(private docService: DocenteService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.doc$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.docService.searchDoc(term)),
    );
  }

}
