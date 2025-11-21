import { createSlice, type PayloadAction } from "@reduxjs/toolkit";




const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    budgets:[]
  },
  reducers: {
    setBudgets: (state , action: PayloadAction<{ budgets : [] }> ) => {
      state.budgets = action.payload.budgets;
    },
  }
});

export const { setBudgets } = budgetSlice.actions;
export default budgetSlice.reducer;
