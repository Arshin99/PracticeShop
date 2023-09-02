import {configureStore} from '@reduxjs/toolkit'
import cart from '@/redux/cart'
import history from '@/redux/history'


export const store = configureStore({
    reducer: {
        cart: cart,
        history: history
    }
})