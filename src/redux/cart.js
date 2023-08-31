import {createSlice} from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'cart',
    initialState: {
        userId: 1,
        cart: []
    },
    reducers: {
        add : (state,action) => {
            
        },
        remove : () => {},
        decrease : () => {},
        reset : () => {}
    }
})

export const {} = cart.actions
export default cart.reducer