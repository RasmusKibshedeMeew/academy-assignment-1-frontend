import { IonCol, IonItem, IonLabel, IonRow } from '@ionic/react';
import { Pokemon } from 'types/data-types-import';

type PokemonDisplayProps = {
    data: Pokemon
}

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ data }) => {

    function colorPicker() {
        if (data.description.includes('fire')) {
            return 'bg-red-500';
        } else if (data.description.includes('water')) {
            return 'bg-blue-500';
        } else {
            return 'bg-gray-500';
        }
    }

    return (
        <IonRow key={data.id} className={colorPicker() + ' border-solid border-2 border-black m-5 text-white p-2'}>
            <IonCol className={'text-center'}>{data.name}</IonCol>
            <IonCol className='text-center'>{data.description}</IonCol>
        </IonRow>
    );
};

export default PokemonDisplay;