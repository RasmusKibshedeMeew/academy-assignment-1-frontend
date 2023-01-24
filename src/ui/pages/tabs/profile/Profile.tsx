// import React, { useState, useEffect } from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonItem, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import { supabase } from 'apis/supabaseClient';
// import { Pokemon } from 'types/data-types-import';
import PokemonDisplay from 'ui/components/pokemondisplay/PokemonDisplay';
// import { useAuthUserStore } from 'store/user';
import { useLoggedInUser } from 'store/loggedInUser';

const Profile: React.FC = () => {

  // const userId = useAuthUserStore().authUser?.id;
  const profile = useLoggedInUser();

  // const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  // const getPokemon = async () => {

  //   // const { data, error, status } = await supabase.from('profile').select('*, pokemon(*)');
  //   const { data, error, status } = await supabase.from('profile').select('*, pokemon! inner (*)').eq('id', userId);

  //   if (data) {
  //     setPokemon(data![0].pokemon as Pokemon[]);
  //   }
  // };

  return (
    <IonContent color={'white-background'} class={'bg-pokeball'}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>
        <IonRow class='bg-gray-200 flex'>
          <IonCol className='text-center font-bold'>Name</IonCol>
          <IonCol className='text-center  font-bold'>Description</IonCol>
        </IonRow>

        {profile.pokemon.map(pokemon => {
          return (
            <PokemonDisplay key={pokemon.id} data={pokemon}></PokemonDisplay>
          );
        })}
      </IonGrid>
    </IonContent>
  );
};

export default Profile;
