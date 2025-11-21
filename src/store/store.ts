import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./dateSlice";
import categoryReducer from './categorySlice';
import budgetReducer from './budgetSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    category: categoryReducer,
    budget: budgetReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
