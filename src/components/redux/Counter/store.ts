import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice";

export const storeCount = configureStore({
    reducer: {appReducer},
});

export type RootState = ReturnType<typeof storeCount.getState>;
export type AppDispatch = typeof storeCount.dispatch;