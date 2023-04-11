import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFavorite } from './types';
import { IBeer } from '../beer/types';

const initialState: IFavorite = {
  isFavorite: [],
  items: [],
};

export const beerSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<boolean[]>) {
      state.isFavorite = action.payload;
    },
    setItemsFavorite(state, action: PayloadAction<IBeer[]>) {
      state.items = action.payload;
    },
  },
});

export const { setFavorite, setItemsFavorite } = beerSlice.actions;

export default beerSlice.reducer;
