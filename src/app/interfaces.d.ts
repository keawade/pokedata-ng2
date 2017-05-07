
interface IPokemon {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  sprites: IPokemonSprites;
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

interface IType {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: INamedAPIResource[];
    half_damage_to: INamedAPIResource[];
    double_damage_to: INamedAPIResource[];
    no_damage_from: INamedAPIResource[];
    half_damage_from: INamedAPIResource[];
    double_damage_from: INamedAPIResource[];
  }
  generation: INamedAPIResource
  move_damage_class: INamedAPIResource;
}

interface IResultList {
  count: number;
  next: string;
  previous: string;
  results: INamedAPIResource[];
}

interface INamedAPIResource {
  name: string;
  url: string;
}
