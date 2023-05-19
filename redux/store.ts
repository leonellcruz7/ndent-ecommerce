import { configureStore } from "@reduxjs/toolkit";
import breadCrumbsReducer from "./breadcrumbs";
export const store = configureStore({
  reducer: {
    breadcrumbs: breadCrumbsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
