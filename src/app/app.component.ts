import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService],
})
export class AppComponent implements OnInit {
  errorMessage: string;
  pokemonList: string[] = [];
  history: IPokemon[] = [];

  selected: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
    const random = Math.floor(Math.random() * 150) + 1;
    this.getPokemon(random.toString());
  }

  private select = (event: NgbTypeaheadSelectItemEvent) => {
    this.getPokemon(event.item);
  }

  public getPokemon(id: string) {
    this.pokemonService.getPokemon(id)
      .subscribe((pokemon) => (this.history.splice(0, 0, pokemon)), (error) => (this.errorMessage = <any>error));
  }

  private getPokemonList() {
    this.pokemonService.getAllPokemon()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList), (error) => (this.errorMessage = <any>error));
  }
}
