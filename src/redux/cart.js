import {createSlice} from '@reduxjs/toolkit'
import SHOE from '@/data/database'
import BlueNike from "../assets/BlueNike.jpg";

const cart = createSlice({
  name: "cart",
  initialState: {
    userId: 1,
    cart: [
      {
        id: 1,
        name: "Blue Nike",
        category: SHOE,
        price: 150,
        size: "45",
        count: 3,
        image: BlueNike,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload.id);
      const IsNotFound = index === -1;
      if (IsNotFound) {
        state.cart.push({ ...payload, count: 1 });
      } else {
        state.cart[index].count += 1;
      }
    },
    remove: (state,action) => {
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload.id);
      state.cart.splice(index,1)
    },
    decrease: (state,action) => {
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload.id);
      state.cart[index].count-=1;
    },
    reset: () => {},
  },
});

export const { add, decrease, remove} = cart.actions;
export default cart.reducer