import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  result: 0,
};

const additionSlice = createSlice({
  name: "SagaAddition",
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

export const { add, addSuccess, addFailed } = additionSlice.actions;

export default additionSlice.reducer;
