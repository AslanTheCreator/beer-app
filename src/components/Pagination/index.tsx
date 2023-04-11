import { IonButton } from '@ionic/react';
import { FC } from 'react';
import styles from './Pagination.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setCurrentPage } from '../../store/filter/slice';
import { PAGES } from '../../constants/pages';

export const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  return (
    <div className={styles.root}>
      {[...Array(PAGES)].map((_, index) => (
        <IonButton
          key={index}
          onClick={() => dispatch(setCurrentPage(index + 1))}
          fill={currentPage === index + 1 ? 'solid' : 'outline'}>
          {index + 1}
        </IonButton>
      ))}
    </div>
  );
};
