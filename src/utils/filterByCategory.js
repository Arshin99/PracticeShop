import {DATABASE} from '@/data/database'

export const filterByCategory = (category) => {
  return DATABASE.products.filter((product) => product.category === category);
};