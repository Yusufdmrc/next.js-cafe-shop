import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface BasketState {
  products: Product[];
  quantity: number;
  total: number;
}

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = basketSlice.actions;
export default basketSlice.reducer;
