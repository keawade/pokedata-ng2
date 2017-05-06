import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public model: any;

  @Input()
  pokemonList: string[] = [];

  formatter = (result: string): string => {
    return result.split('-').map((subStr) => (subStr.charAt(0).toUpperCase() + subStr.slice(1))).join(' ');
  }

  search = (text$: Observable<string>) => (
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map((term) => (
        term === '' ? [] : this.pokemonList.filter((v) => (new RegExp(term, 'gi').test(v))).slice(0, 10))
      )
  )

  constructor() { }

  ngOnInit() {
  }

}
