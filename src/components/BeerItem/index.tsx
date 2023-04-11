import { FC } from 'react';
import styles from './BeerItem.module.css';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCol,
  IonIcon,
  IonRow,
} from '@ionic/react';
import { heartOutline, heart } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useAction } from '../../localStorage/actions';
import { useAppSelector } from '../../store/hooks';
import { IBeer } from '../../store/beer/types';

interface IBeerItem {
  item: IBeer;
}

export const BeerItem: FC<IBeerItem> = ({ item }) => {
  const isFavorite = useAppSelector((state) => state.favorite.isFavorite);
  const { toogleFavorite } = useAction();

  return (
    <IonCard className={styles.card}>
      <Link key={item.id} to={`/beer/${item.id}`}>
        <img className={styles.img} src={item.image_url} alt={item.name} />
      </Link>
      <IonCardContent>
        <IonRow className="ion-align-items-center">
          <IonCol>
            <IonCardSubtitle>{item.abv}</IonCardSubtitle>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton
              onClick={() => {
                toogleFavorite(item.id, item);
              }}
              size="small"
              color={'primary'}>
              <IonIcon icon={isFavorite[item.id - 1] ? heart : heartOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};
