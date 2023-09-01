import {createSlice} from '@reduxjs/toolkit'
import SHOE from '@/data/database'
import BlueNike from "../assets/BlueNike.jpg";

const cart = createSlice({
  name: "cart",
  initialState: {
    userId: 1,
    cart: [],
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
    reset: (state) => {
      state.cart.length = 0
    },
  },
});

export const { add, decrease, remove, reset } = cart.actions;
export default cart.reducer