import { Database } from "./database.types";

export type Db = Database['public']['Tables'];

export type Pokemons = Db['pokemons'];