import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  result: 0,
};

const multiplySlice = createSlice({
  name: "SagaMultiplication",
  initialState,
  reducers: {
    mul: (state, actions) => {
      state.isFetching = true;
    },
    mulSuccess: (state, actions) => {
      state.isFetching = false;
      state.result = actions.payload.result;
    },
    mulFailed: (state, actions) => {
      state.isFetching = false;
    },
  },
});

export const { mul, mulSuccess, mulFailed } = multiplySlice.actions;

export default multiplySlice.reducer;
