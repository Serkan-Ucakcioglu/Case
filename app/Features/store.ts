import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

export const store = configureStore({
  reducer: {
    searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
