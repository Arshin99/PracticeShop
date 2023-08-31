import {configureStore} from '@reduxjs/toolkit'
import cart from '@/redux/cart'


export const store = configureStore({
    reducer: {
        cart: cart
    }
})