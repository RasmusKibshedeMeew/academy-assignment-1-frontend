import React from 'react';
import { useState, useEffect } from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import { Divider, List, Typography } from 'antd';
import { Pokemon } from 'types/data-types-import';
import { supabase } from 'apis/supabaseClient';

const PokemonPage: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const { data, error } = await supabase.from('pokemon').select();

    if (data) {
      setPokemon(data);
    };
  };

  return (

    <IonContent color={'white-background'}>

      <>
        <List
          size="large"
          header={<h2>Pokemon</h2>}
          bordered
          dataSource={pokemon}
          renderItem={(item) => <List.Item><List.Item.Meta title={item.name} description={item.description}></List.Item.Meta></List.Item>}
        />
      </>


    </IonContent>
  );
};

export default PokemonPage;
