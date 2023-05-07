import { createSlice } from "@reduxjs/toolkit";
import { arr } from "../data/data";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface initial {
  data: typeof arr;
}

const initialState: initial = {
  data: arr,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    dataFilter: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const selectedData = (state: RootState) => state.searchSlice.data;

export const { dataFilter } = searchSlice.actions;
export default searchSlice.reducer;
