import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';
import { Pokemons } from 'types/data-types-import';

const Profile: React.FC<Pokemons> = ({ Row }) => {

  // TODO get to work
  // const pokemonType = data.public.Tables.pokemons;

  const [pokemon, setPokemon] = useState(Row);
  useEffect(() => {
    getPokemon();
  });

  const getPokemon = async () => {

    const { data, error, status } = await supabase.from('pokemons').select('*');

    if (data) {
      const pokemon = data[0];

      setPokemon(pokemon);
    }

  };


  return (
    <IonContent color={'white-background'} class={'bg-pokeball'}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonLabel>{pokemon ? pokemon.name : ''}</IonLabel>
      <br />
      <IonLabel>{pokemon ? pokemon.description : ''}</IonLabel>
    </IonContent>
  );
};

export default Profile;
