import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

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
    const random = Math.floor(Math.random() * 151);
    this.getPokemon(random.toString());
  }

  public getPokemon(id: string) {
    this.pokemonService.getPokemon(id)
      .subscribe((pokemon) => (this.history.push(pokemon)), (error) => (this.errorMessage = <any>error));
  }

  private getPokemonList() {
    this.pokemonService.getAllPokemon()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList), (error) => (this.errorMessage = <any>error));
  }
}
