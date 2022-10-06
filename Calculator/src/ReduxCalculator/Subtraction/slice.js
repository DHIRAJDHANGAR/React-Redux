import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  result: 0,
};

const subtractionSlice = createSlice({
  name: "SagaSubtraction",
  initialState,
  reducers: {
    sub: (state, actions) => {
      state.isFetching = true;
    },
    subSuccess: (state, actions) => {
      state.isFetching = false;
      state.result = actions.payload.result;
    },
    subFailed: (state, actions) => {
      state.isFetching = false;
    },
  },
});

export const { sub, subSuccess, subFailed } = subtractionSlice.actions;

export default subtractionSlice.reducer;
