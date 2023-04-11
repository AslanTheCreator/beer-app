import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPage } from './types';

const initialState: IPage = {
  currentPage: 1,
};

export const beerSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = beerSlice.actions;

export default beerSlice.reducer;
