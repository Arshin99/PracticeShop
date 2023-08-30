import { DATABASE } from "@/data/database";

export const filterById = (id) => {
  return DATABASE.products.filter((product) => product.id === id);
};
