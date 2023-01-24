import { Database } from "./database.types";

export type Db = Database['public']['Tables'];

export type Pokemon = Db['pokemon']['Row'];

export type Profile = Db['profile']['Row'];