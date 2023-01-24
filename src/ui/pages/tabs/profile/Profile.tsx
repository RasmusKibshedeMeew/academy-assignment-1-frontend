// import React, { useState, useEffect } from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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

      <IonLabel className='w-full block text-center font-bold text-4xl m-10'>{profile.user?.first_name} {profile.user?.last_name}</IonLabel>

      <IonGrid className='border-solid border-black border-2 m-2'>
        <IonRow>
          <IonCol>      
            <IonLabel className='w-full block text-center font-bold text-3xl'>Pokemon</IonLabel>
          </IonCol>
        </IonRow>
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
