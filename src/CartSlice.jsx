import { createSlice } from '@reduxjs/toolkit';

// Each item: { name, image, cost (number), quantity }
const initialState = { items: [] };

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // payload is the plant name
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (!item) return;
      if (quantity <= 0) {
        // dropping to zero removes the item, which re-enables "Add to Cart"
        state.items = state.items.filter((i) => i.name !== name);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.cost * i.quantity, 0);

export default CartSlice.reducer;
