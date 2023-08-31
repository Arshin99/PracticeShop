import {createSlice} from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'cart',
    initialState: {
        userId: 1,
        cart: []
    },
    reducers: {
        add : (state,action) => {
            const {payload} = action
            const index = state.cart.findIndex(item => item.id===payload.id)
            const IsNotFound = index===-1
            if (IsNotFound) {
              state.cart.push({...payload, count:1});
            } else {
              state.cart[index].count += 1;
            }
        },
        remove : () => {},
        decrease : () => {},
        reset : () => {}
    }
})

export const {add} = cart.actions
export default cart.reducer