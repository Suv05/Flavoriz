import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favoriteSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;
