import { IonItem, IonLabel } from '@ionic/react';
import { Pokemon } from 'types/data-types-import';

type PokemonDisplayProps = {
    data: Pokemon
}

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ data }) => {
    return (
        <IonItem key={data.id}>
            <IonLabel>{data.name}</IonLabel>
            <IonLabel>{data.description}</IonLabel>
        </IonItem>
    );
};

export default PokemonDisplay;