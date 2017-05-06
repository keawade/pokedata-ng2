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
  pokemonList: string[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getAllPokemon()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList), (error) => (this.errorMessage = <any>error))
  }

  title = 'app works!';
}
