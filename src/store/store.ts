import { configureStore } from '@reduxjs/toolkit';
import beer from './beer/slice';
import favorite from './favorite/slice';
import filters from './filter/slice';

export const store = configureStore({
  reducer: {
    beer,
    favorite,
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
