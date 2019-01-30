import { ID } from '@datorama/akita';

export interface Beer {
  beer_id: ID;
  product_id: number;
  name: string;
  price: string;
  size: string;
  image_url: string;
  category: string;
  abv: number;
  style: string;
  attributes: string;
  type: string;
  brewer: string;
  country: string;
  on_sale: boolean;
}
