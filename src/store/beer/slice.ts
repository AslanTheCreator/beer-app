import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBeer, IBeerSliceState } from './types';

const initialState: IBeerSliceState = {
  items: [],
  item: { id: 1, abv: 0, image_url: '' },
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IBeer[]>) {
      state.items = action.payload;
    },
    setItem(state, action: PayloadAction<IBeer | undefined>) {
      state.item = action.payload;
    },
  },
});

export const { setItems, setItem } = beerSlice.actions;

export default beerSlice.reducer;
