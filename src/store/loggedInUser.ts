import { Pokemon, Profile } from 'types/data-types-import';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type LoggedInUser = {
    user: Profile | null;
    pokemon: Pokemon[] | []
    setLoggedInUser: (user: Profile, pokemon: Pokemon) => void;
    resetLoggedInUser: () => void;
}

export const useLoggedInUser = create<LoggedInUser>()(
    persist(
        (set) => ({
            user: null,
            pokemon: [],
            setLoggedInUser: (user, pokemon) => set({ user: user, pokemon: [] }),
            resetLoggedInUser: () => set({ user: null, pokemon: [] }),
        }),
        {
            name: 'loggedInUser-storage',
        }
    )
);
