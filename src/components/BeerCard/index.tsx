import { FC } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import styles from './BeerCard.module.css';
import { useAppSelector } from '../../store/hooks';

export const BeerCard: FC = () => {
  const item = useAppSelector((state) => state.beer.item);

  return (
    <IonCard className={styles.card}>
      <img className={styles.img} src={item?.image_url} alt={item?.name} />
      <IonCardHeader>
        <IonCardTitle>{item?.name}</IonCardTitle>
        <IonCardSubtitle>{item?.abv}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{item?.description}</IonCardContent>
    </IonCard>
  );
};
