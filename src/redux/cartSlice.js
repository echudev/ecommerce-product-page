import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload
      const index = state.findIndex((i) => i.id === item.id)
      if (index >= 0) {
        state[index].quantity += item.quantity
      } else {
        state.push(item)
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

// action creators are generated for each reducer
export const { addItemToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
