import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  public searchText: string;

  @Output()
  selectItem: EventEmitter<NgbTypeaheadSelectItemEvent> = new EventEmitter<NgbTypeaheadSelectItemEvent>();

  @Input()
  pokemonList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  private select = (event: NgbTypeaheadSelectItemEvent) => {
    this.selectItem.emit(event);
  }

  private formatter = (result: string): string => {
    return result.split('-').map((subStr) => (subStr.charAt(0).toUpperCase() + subStr.slice(1))).join(' ');
  }

  private search = (text$: Observable<string>) => (
    text$
      .debounceTime(200)
      // .distinctUntilChanged()
      .map((term) => (term === '' ? [] : this.pokemonList.filter((v) => (new RegExp(term, 'gi').test(v))).slice(0, 10)))
  )
}
