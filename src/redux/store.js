import {configureStore} from '@reduxjs/toolkit'
import cart from '@/redux/cart'
import history from '@/redux/history'
import comments from '@/redux/comments'


export const store = configureStore({
    reducer: {
        cart: cart,
        history: history,
        comments: comments
    }
})