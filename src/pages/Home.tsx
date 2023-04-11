import { IonContent, IonPage } from '@ionic/react';
import { BeerList } from '../components/BeerList';
import { getBeer } from '../services/api';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setItems } from '../store/beer/slice';
import { Favorites } from '../components/Favorites';
import { setFavorite } from '../store/favorite/slice';
import { PAGES } from '../constants/pages';
import { useAction } from '../localStorage/actions';

const Home: React.FC = () => {
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const isFavorite = useAppSelector((state) => state.favorite.isFavorite);
  const dispatch = useAppDispatch();
  const { fillInFavorites } = useAction();
  const fetchBeer = async () => {
    const beer = await getBeer.getAll(currentPage);
    dispatch(setItems(beer));
  };
  useEffect(() => {
    fetchBeer();
  }, [currentPage]);
  useEffect(() => {
    (async () => {
      const beer = await getBeer.getAll(currentPage);
      dispatch(setFavorite([...Array(beer.length * PAGES)].map((obj) => (obj = false))));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (isFavorite.length > 0) await fillInFavorites();
    })();
  }, [isFavorite.length > 0]);

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Favorites />
        <BeerList />
        <Pagination />
      </IonContent>
    </IonPage>
  );
};

export default Home;
