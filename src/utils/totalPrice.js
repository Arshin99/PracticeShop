
export const CalculatePrice = (cart) => {
  return cart.reduce(
    (init, curr) => (init = init + curr.count * curr.price),
    0
  );
};
