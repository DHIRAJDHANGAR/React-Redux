import Oprations from "../Calculator/reducer";
import calculatorSlice from "../ReduxToolkit/Calculator/calculatorSlice";
// import sagaCalculatorSlice from "../SagaCalculator/sagaCalculatorSlice";
import additionSlice from "../ReduxCalculator/Addition/slice";
import divisionSlice from "../ReduxCalculator/Division/slice";
import multiplySlice from "../ReduxCalculator/Multiplication/slice";
import subtractionSlice from "../ReduxCalculator/Subtraction/slice";
import apiCallSlice from "../APICall/slice";

const reducers = {
  counter: Oprations,
  meraCounter: calculatorSlice,
  // sagaCalculatorSlice: sagaCalculatorSlice,
  additionSlice: additionSlice,
  divisionSlice: divisionSlice,
  multiplySlice: multiplySlice,
  subtractionSlice: subtractionSlice,
  apiCallSlice: apiCallSlice,
};

export default reducers;
