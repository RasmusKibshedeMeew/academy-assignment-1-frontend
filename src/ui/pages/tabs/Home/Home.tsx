import React from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import TakePicture from 'ui/components/frontpage/take-picture/TakePicture';
import { Photo } from '@capacitor/camera';

const Home: React.FC = () => {
  // const [picture, setPicture] = React.useState<Photo>();

  return (
    <IonContent color={'white-background'}>

      <h1 className='text-center'>Welcome</h1>


    </IonContent>
  );
};

export default Home;
