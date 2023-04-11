import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { getBeer } from '../services/api';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { BeerCard } from '../components/BeerCard';
import { useAppDispatch } from '../store/hooks';
import { setItem } from '../store/beer/slice';
import { Link } from 'react-router-dom';

const Card: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id?: string }>();

  const fetchBeerId = async () => {
    if (!id) {
      return;
    }
    const beer = await getBeer.getById(id);
    dispatch(setItem(beer));
  };

  useEffect(() => {
    fetchBeerId();
  }, [id]);

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Link to="/home">Back</Link>
        <BeerCard />
      </IonContent>
    </IonPage>
  );
};

export default Card;
