import { createSlice } from "@reduxjs/toolkit";
import { arr } from "../data/data";

interface initial {
  data: typeof arr;
}

const initialState: initial = {
  data: arr,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    dataFilter: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { dataFilter } = searchSlice.actions;

export default searchSlice.reducer;
