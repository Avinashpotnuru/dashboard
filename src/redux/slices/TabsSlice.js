import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: true,
};

const tabSlice = createSlice({
  name: "tabSlice",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.tabs = !state.tabs;
    },
  },
});

export const { toggleNav } = tabSlice.actions;

export default tabSlice.reducer;
