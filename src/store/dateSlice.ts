import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const dateSlice = createSlice({
  name: "date",
  initialState: { month: new Date().getMonth(), year: new Date().getFullYear() },
  reducers: {
    updateDate: (state , action: PayloadAction<{ name: string; value: any }> ) => {
      const {name, value} = action.payload;
      if( name === 'month'){
        state['month'] = value;
      }else{
        state['year'] = value;
      }
    },
  }
});

export const { updateDate } = dateSlice.actions;
export default dateSlice.reducer;
