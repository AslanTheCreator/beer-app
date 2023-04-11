import axios from 'axios';
import { IBeer } from '../store/beer/types';

export const getBeer = {
  async getAll(page: number) {
    try {
      const { data } = await axios.get<IBeer[]>(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`,
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  async getById(id: string) {
    try {
      const { data } = await axios.get<IBeer[]>(`https://api.punkapi.com/v2/beers/${id}`);
      return data[0];
    } catch (error) {
      console.log(error);
    }
  },
};
