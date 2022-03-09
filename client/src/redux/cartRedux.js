import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      //alert(action.payload);
      state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
  },
});
export const getCartItems = (state) => state.cart.products;
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
