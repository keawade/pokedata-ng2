
interface IPokemon {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  sprites: IPokemonSprites;
  typeData: [{
    id: number;
    name: string;
    noDamageFrom: string[];
    halfDamageFrom: string[];
    doubleDamageFrom: string[];
    noDamageTo: string[];
    halfDamageTo: string[];
    doubleDamageTo: string[];
    generation: string
    move_damage_class: string;
  }];
}

interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}
