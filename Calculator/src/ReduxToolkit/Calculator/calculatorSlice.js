import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultOfSum: 0,
  resultOfSub: 0,
  resultOfMul: 0,
  resultOfDiv: 0,
};
const calculatorSlice = createSlice({
  name: "meraCalculator",
  initialState,
  reducers: {
    sum: (state, actions) => {
      state.resultOfSum = +actions.payload.num1 + +actions.payload.num2;
    },

    sub: (state, actions) => {
      state.resultOfSub = +actions.payload.num1 - +actions.payload.num2;
    },

    mul: (state, actions) => {
      state.resultOfMul = +actions.payload.num1 * +actions.payload.num2;
    },

    div: (state, actions) => {
      state.resultOfDiv = +actions.payload.num1 / +actions.payload.num2;
    },
  },
});

export const { sum, sub, mul, div } = calculatorSlice.actions;

export default calculatorSlice.reducer;
