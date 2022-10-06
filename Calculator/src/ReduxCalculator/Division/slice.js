import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  result: 0,
};

const divisionSlice = createSlice({
  name: "SagaDivision",
  initialState,
  reducers: {
    div: (state, actions) => {
      state.isFetching = true;
    },
    divSuccess: (state, actions) => {
      state.isFetching = false;
      state.result = actions.payload.result;
    },
    divFailed: (state, actions) => {
      state.isFetching = false;
    },
  },
});

export const { div, divSuccess, divFailed } = divisionSlice.actions;

export default divisionSlice.reducer;
