import React from 'react';
import { useState, useEffect } from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import { Button, Divider, List, Typography } from 'antd';
import { Pokemon } from 'types/data-types-import';
import { supabase } from 'apis/supabaseClient';
import { useLoggedInUser } from 'store/loggedInUser';

const PokemonPage: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const setLoggedInUser = useLoggedInUser((state) => state.setLoggedInUser);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const user = useLoggedInUser();

  async function fetchPokemon() {
    const { data, error } = await supabase.from('pokemon').select();

    if (data) {
      setPokemon(data);
    };
  };

  async function savePokemon(pokemon: Pokemon) {

    if (user.user?.id) {
      await supabase.from('pokemon_profiles_profile').insert({ 'pokemon_id': pokemon.id, 'profile_id': user.user?.id });

      // Move to another location
      const { data, error, status } = await supabase.from('profile').select('*, pokemon(*)');
      console.log(data);

      if (data) {
        setLoggedInUser(data[0], data[0].pokemon as Pokemon[]);
      }
    }
  }


  function colorPicker(data: Pokemon) {
    if (data.description.includes('fire')) {
      return 'bg-red-400';
    } else if (data.description.includes('water')) {
      return 'bg-blue-400';
    } else if (data.description.includes('electric')) {
      return 'bg-yellow-400';
    } else {
      return 'bg-gray-400';
    }
  }
  return (

    <IonContent color={'white-background'}>

      <>
        <List
          size="large"
          header={<h2>Pokemon</h2>}
          bordered
          dataSource={pokemon}
          renderItem={(item) => <List.Item className={colorPicker(item)}><List.Item.Meta title={item.name} description={item.description}></List.Item.Meta><Button className='bg-black' type="primary" shape="circle" onClick={() => savePokemon(item)}>+</Button></List.Item>}
        />

      </>


    </IonContent>
  );
};

export default PokemonPage;
