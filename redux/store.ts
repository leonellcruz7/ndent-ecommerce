import { configureStore } from "@reduxjs/toolkit";
import breadCrumbsReducer from "./breadcrumbs";
import productsReducer from "./products";
export const store = configureStore({
  reducer: {
    breadcrumbs: breadCrumbsReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
