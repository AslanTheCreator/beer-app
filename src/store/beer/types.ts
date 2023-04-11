export interface IBeer {
  id: number;
  name?: string;
  description?: string;
  abv: number;
  image_url: string;
}

export interface IBeerSliceState {
  items: IBeer[];
  item: IBeer | undefined;
}
