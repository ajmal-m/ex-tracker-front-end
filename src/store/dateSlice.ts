import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { months } from "../const";


const dateSlice = createSlice({
  name: "date",
  initialState: { month: months[new Date().getMonth()], year: new Date().getFullYear() },
  reducers: {
    updateDate: (state , action: PayloadAction<{ name: string; value: any }> ) => {
      const {name, value} = action.payload;
      state[name] = value;
    },
  }
});

export const { updateDate } = dateSlice.actions;
export default dateSlice.reducer;
