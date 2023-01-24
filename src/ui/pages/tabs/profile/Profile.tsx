import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';
import { Pokemon } from 'types/data-types-import';
import PokemonDisplay from 'ui/components/pokemondisplay/PokemonDisplay';

const Profile: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon();
  });

  const getPokemon = async () => {

    // const { data, error, status } = await supabase.from('profile').select('*, pokemon(*)');
    const { data, error, status } = await supabase.from('profile').select('*, pokemon! inner (*)');

    // data?.pokemon

    if (data) {
      setPokemon(data![0].pokemon as Pokemon[]);
      // setPokemon(data);
    }
  };



  return (
    <IonContent color={'white-background'} class={'bg-pokeball'}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      {pokemon[0] ? pokemon.map(pokemon => {
        return (
          <PokemonDisplay key={pokemon.id} data={pokemon}></PokemonDisplay>
        );
      }) : ''}
    </IonContent>
  );
};

export default Profile;
