import { createSlice } from "@reduxjs/toolkit";

//Load intial item from local-storage
const intialFav = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: intialFav,
  reducers: {
    addFavorite: (state, action) => {
      const recipe = action.payload;
      const existingRecipe = state.find((item) => item.id === recipe.id);
      if (existingRecipe) {
        const updatedState = state.filter((item) => item.id !== recipe.id);
        localStorage.setItem("favoriteRecipes", JSON.stringify(updatedState));
        return updatedState;
      }
      const updatedState = [...state, recipe];
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
