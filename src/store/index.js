import { configureStore } from '@reduxjs/toolkit';
import inputValueSlice from './inputValueSlice.js';

export default configureStore({
   reducer: {
      inputValues: inputValueSlice,
   },
});
