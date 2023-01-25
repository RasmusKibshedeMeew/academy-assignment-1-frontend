import React from 'react';
import { useEffect, useState } from 'react';
import { useLoggedInUser } from 'store/loggedInUser';
import { IonContent, IonTitle } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  const user = useLoggedInUser();


  async function egde() {

    const { data, error } = await supabase.functions.invoke('hello', {
      body: { name: user.user?.first_name },
    });

    if (data) {
      setMessage(data.message);
    };

  };

  useEffect(() => {
    egde();
  }, []);



  return (
    <IonContent color={'white-background'}>

      <h1 className='text-center'>{message}</h1>


    </IonContent>
  );
};

export default Home;
