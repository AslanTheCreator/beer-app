import { FC } from 'react';
import { BeerItem } from './BeerItem';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import { setItemsFavorite } from '../store/favorite/slice';
import { useAction } from '../localStorage/actions';

export const BeerList: FC = () => {
  const beer = useAppSelector((state) => state.beer.items);
  const isFavorite = useAppSelector((state) => state.favorite.isFavorite);
  const dispatch = useAppDispatch();
  const { getFavorites } = useAction();

  useEffect(() => {
    (async () => {
      dispatch(setItemsFavorite(await getFavorites()));
    })();
  }, [isFavorite]);
  return (
    <div>
      <IonGrid>
        <IonRow>
          {beer.map((item) => (
            <IonCol key={item.id} sizeXs="6" sizeMd="6" sizeXl="4">
              <BeerItem item={item} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};
