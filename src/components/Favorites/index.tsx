import {
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  createAnimation,
} from '@ionic/react';
import { useRef } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './Favorites.module.css';

export const Favorites = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const dismiss = () => {
    modal.current?.dismiss();
  };
  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  const beer = useAppSelector((state) => state.favorite.items);

  return (
    <>
      <IonButton id="open-modal">Избранное</IonButton>
      <IonModal
        ref={modal}
        id="example-modal"
        trigger="open-modal"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}>
        <IonContent>
          <IonToolbar>
            <IonTitle>Favorites</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            {beer.length === 0
              ? 'Список пуст'
              : beer.map((item) => (
                  <IonItem key={item.id}>
                    <img className={styles.img} src={item.image_url} alt={item.name}></img>
                    <IonLabel className="ion-text-wrap">
                      <h2>{item.name}</h2>
                    </IonLabel>
                  </IonItem>
                ))}
            <IonItem></IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};
