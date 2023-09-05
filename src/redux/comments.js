import { createSlice } from "@reduxjs/toolkit";
import { BAG } from "@/data/database";
import BlackBag from "../assets/blackBag.webp";

const comments = createSlice({
  name: "Comments",
  initialState: [
    {
        id:1,
      productName: 'Blue Nike',
      comment: 'very good shoes',
      username: 'Arshin99'
    },
  ],
  reducers: {
    addComment: (state, action) => {
      const { payload } = action;
      state.push({
        id: Math.floor(Math.random() * 1000),
        productName: payload.productName,
        comment: payload.comment,
        username: payload.username,
      });
    },
  },
});

export const { addComment } = comments.actions;
export default comments.reducer;
