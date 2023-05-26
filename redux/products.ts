import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {
    name: "",
    category: "",
    affiliate_Link: "",
    sizes: [],
    image_one: "",
    image_two: "",
    image_three: "",
    colors: [],
    price: 0,
    description: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductName: (state, action) => {
      state.product.name = action.payload;
    },
    setProductcategory: (state, action) => {
      state.product.category = action.payload;
    },
    setProductPrice: (state, action) => {
      state.product.price = Number(action.payload);
    },
    setProductAffiliateLink: (state, action) => {
      state.product.affiliate_Link = action.payload;
    },
    setProductDescription: (state, action) => {
      state.product.description = action.payload;
    },
  },
});

export const {
  setProducts,
  setProductName,
  setProductcategory,
  setProductPrice,
  setProductAffiliateLink,
  setProductDescription,
} = productsSlice.actions;
export default productsSlice.reducer;
