export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pokemons: {
        Row: {
          created_at: string | null
          description: string | null
          fk_user_id: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          fk_user_id?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          fk_user_id?: string | null
          id?: number
          name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
