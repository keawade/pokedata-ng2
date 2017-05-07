import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private pokemonUrl = 'https://pokedata-api.herokuapp.com/pokemon';

  constructor(private http: Http) { }

  public getAllPokemon(): Observable<string[]> {
    return this.http.get(this.pokemonUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getPokemon(id): Observable<IPokemon> {
    return this.http.get(`${this.pokemonUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}