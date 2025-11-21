import { createSlice, type PayloadAction } from "@reduxjs/toolkit";




const categorySlice = createSlice({
  name: "date",
  initialState: {
    categories:[]
  },
  reducers: {
    setCategories: (state , action: PayloadAction<{ categories : [] }> ) => {
      state.categories = action.payload.categories;
    },
  }
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
