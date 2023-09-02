import { createSlice } from "@reduxjs/toolkit";
import {BAG} from '@/data/database'
import BlackBag from "../assets/blackBag.webp";


const history = createSlice({
  name: "CartHistory",
  initialState: [
    {
        userId: 1,
        historyCart: [
            
            ],
    }
  ],
  reducers: {
    addToHistory : (state,action) => {
      const {payload} = action
      const index = state.findIndex((user) => user.userId === payload.userId);
      state[index].historyCart.push({
        id: Math.floor(Math.random()*1000),
        items: payload.items,
        totalPrice: payload.totalPrice
      })
    },
  },
    
});

export const { addToHistory } = history.actions;
export default history.reducer