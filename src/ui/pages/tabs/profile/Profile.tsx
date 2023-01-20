import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';
import { Pokemons } from 'types/data-types-import';

const Profile: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemons[]>([]);

  useEffect(() => {
    getPokemon();
  });

  const getPokemon = async () => {

    const { data, error, status } = await supabase.from('pokemons').select('*').eq('fk_user_id', '1b1f426b-39c4-4eef-86c3-ecc2fdf03266');

    if (data) {

      setPokemon(data);
    }
  };


  return (
    <IonContent color={'white-background'} class={'bg-pokeball'}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* <IonLabel>{pokemon ? pokemon.name : ''}</IonLabel>
      <br />
      <IonLabel>{pokemon ? pokemon.description : ''}</IonLabel> */}

      {pokemon[0] ? pokemon.map(pokemon => {
        return (
          <IonItem key={pokemon.id}>
            <IonLabel>{pokemon.name}</IonLabel>
            <IonLabel>{pokemon.description}</IonLabel>
          </IonItem>
        );
      }) : ''}
    </IonContent>
  );
};

export default Profile;
