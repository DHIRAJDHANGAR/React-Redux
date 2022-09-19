import { DECREMENT, INCREMENT } from "./action";

const initialstate = 0;

const CounterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state < 10) {
        return state + 1;
      }

    case DECREMENT:
      if (state !== 0) {
        return state - 1;
      }

    default:
      return state;
  }
};
export default CounterReducer;
