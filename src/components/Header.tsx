import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

export const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color={'tertiary'}>Beer</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
