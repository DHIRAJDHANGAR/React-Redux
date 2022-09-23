import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  isFetching: false,
};
const sagaCalculatorSlice = createSlice({
  name: "SagaCalculator",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.isFetching = true;
    },
    addSuccess: (state, actions) => {
      state.isFetching = false;
      state.result = actions.payload.result;
    },
    addFailed: (state, actions) => {
      state.isFetching = false;
    },
  },
});

export const { add, addSuccess, addFailed } = sagaCalculatorSlice.actions;

export default sagaCalculatorSlice.reducer;
