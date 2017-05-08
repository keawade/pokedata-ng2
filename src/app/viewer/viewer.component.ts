import { Component, OnInit, Input, OnChanges } from '@angular/core';
import leftPad from '../../leftpad';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  private image: string;
  private weaknesses: string[];
  private resistances: string[];
  private immunities: string[];

  @Input()
  current: IPokemon = undefined;

  constructor() { }

  ngOnInit() {
    this.update();
  }

  ngOnChanges() {
    this.update();
  }

  private update = () => {
    this.current.name = this.current.name.split('-').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
    this.current.id = leftPad(this.current.id, 3, 0);
    this.image = `//assets.pokemon.com/assets/cms2/img/pokedex/full/${this.current.id}.png`;
    this.weaknesses = this.current.typeData
      .map((type) => (type.doubleDamageFrom))
      .reduce((prev, next) => (prev.concat(next)), [])
      .filter((type, index, array) => (array.indexOf(type) === index));
    this.resistances = this.current.typeData
      .map((type) => (type.halfDamageFrom))
      .reduce((prev, next) => (prev.concat(next)), [])
      .filter((type, index, array) => (array.indexOf(type) === index));
    this.immunities = this.current.typeData
      .map((type) => (type.noDamageFrom))
      .reduce((prev, next) => (prev.concat(next)), [])
      .filter((type, index, array) => (array.indexOf(type) === index));

    const toRemove = [];
    this.weaknesses.map((weak) => {
      if (this.resistances.indexOf(weak) > -1) {
        toRemove.push(weak);
      }
    })
    this.weaknesses = this.weaknesses.filter((type) => (toRemove.indexOf(type) === -1));
    this.resistances = this.resistances.filter((type) => (toRemove.indexOf(type) === -1));
  }
}
