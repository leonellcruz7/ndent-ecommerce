import { createSlice } from "@reduxjs/toolkit";

interface BreadCrumbs {
  breadcrumbs: BreadCrumb[];
}
interface BreadCrumb {
  label: string;
  link: string;
}
const initialState: BreadCrumbs = {
  breadcrumbs: [],
};

export const breadCrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadCrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setBreadCrumbs } = breadCrumbsSlice.actions;
export default breadCrumbsSlice.reducer;
