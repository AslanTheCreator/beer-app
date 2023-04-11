import { useAppDispatch, useAppSelector } from '../store/hooks';
import { store } from './store';
import { setFavorite } from '../store/favorite/slice';
import { IBeer } from '../store/beer/types';

const BEER_KEY = 'favorites';

export const useAction = () => {
  const isFavorite = useAppSelector((state) => state.favorite.isFavorite);
  const dispatch = useAppDispatch();
  //Добавление в массив избранного
  const setValue = (isBool: boolean, id: number) => {
    const favorite = [...isFavorite];
    favorite.splice(id - 1, 1, isBool);
    dispatch(setFavorite(favorite));
  };

  const addToFavorites = async (value: IBeer, id: number) => {
    let favorites = await getFavorites();
    store.set(BEER_KEY, [...favorites, value]);
    setValue(true, id);
  };
  // Заполнение избранного из localStorage
  const fillInFavorites = async () => {
    let favorites = await getFavorites();
    const favorite = [...isFavorite];
    favorites.map((item) => {
      favorite.splice(item.id - 1, 1, true);
    });
    dispatch(setFavorite(favorite));
  };

  const getFavorites = async (): Promise<IBeer[]> => {
    const favorites = await store.get(BEER_KEY);
    return favorites || [];
  };

  const removeFromFavorites = async (id: number) => {
    const favorites = await getFavorites();
    store.set(
      BEER_KEY,
      favorites.filter((favorite) => favorite.id !== id),
    );
    setValue(false, id);
  };

  const toogleFavorite = (id: number, value: IBeer) => {
    if (isFavorite[id - 1]) {
      removeFromFavorites(id);
    } else {
      addToFavorites(value, id);
    }
  };
  return { toogleFavorite, getFavorites, fillInFavorites };
};
