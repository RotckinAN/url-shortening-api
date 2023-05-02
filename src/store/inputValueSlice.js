import { createSlice } from '@reduxjs/toolkit';

const inputValueSlice = createSlice({
   name: 'inputValue',
   initialState: {
      value: '',
      errorMessage: false,
      resultValue: [],
   },
   reducers: {
      setValue(state, action) {
         state.value = action.payload.value;
      },
      getUrl(state, action) {
         state.resultValue = [...state.resultValue, action.payload];
         state.value = '';
         state.errorMessage = false;
      },
      setErrorMessage(state) {
         state.errorMessage = true;
      },
   },
});

export const { setValue, getUrl, setErrorMessage } = inputValueSlice.actions;
export default inputValueSlice.reducer;
