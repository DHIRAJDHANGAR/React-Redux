import {
  ADDITION,
  DIVISION,
  MULTIPLICATION,
  RESET,
  SUBTRACTION,
} from "./action";

const initialState = {
  add: 0,
  sub: 0,
  mul: 0,
  div: 0,
};
const Oprations = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return { ...state, add: action.val1 + action.val2 };

    case SUBTRACTION:
      return { ...state, sub: action.val1 - action.val2 };

    case MULTIPLICATION:
      return { ...state, mul: action.val1 * action.val2 };

    case DIVISION:
      return { ...state, div: action.val1 / action.val2 };

    case RESET:
      return { ...state, add: 0, sub: 0, mul: 0, div: 0 };

    default:
      return state;
  }
};
export default Oprations;
