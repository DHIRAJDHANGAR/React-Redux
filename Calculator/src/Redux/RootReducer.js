import Oprations from "../Calculator/reducer";
import calculatorSlice from "../ReduxToolkit/Calculator/calculatorSlice";
import sagaCalculatorSlice from "../SagaCalculator/sagaCalculatorSlice";
const reducers = {
  counter: Oprations,
  meraCounter: calculatorSlice,
  sagaCalculatorSlice: sagaCalculatorSlice,
};
export default reducers;
