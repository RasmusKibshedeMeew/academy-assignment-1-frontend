import { IonCol, IonItem, IonLabel, IonRow } from '@ionic/react';
import { Pokemon } from 'types/data-types-import';

type PokemonDisplayProps = {
    data: Pokemon
}

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ data }) => {
    return (
        <IonRow key={data.id}>
            <IonCol className='text-center'>{data.name}</IonCol>
            <IonCol className='text-center'>{data.description}</IonCol>
        </IonRow>
    );
};

export default PokemonDisplay;