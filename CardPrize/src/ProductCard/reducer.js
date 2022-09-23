import { INCREMENT, DECREMENT } from "./action";

const initialState = [
  { id: 1, title: "google", prize: 10, quantity: 0 },
  { id: 2, title: "facebook", prize: 15, quantity: 0 },
  { id: 3, title: "myntra", prize: 20, quantity: 0 },
  { id: 4, title: "swiggy", prize: 25, quantity: 0 },
];

const ProductCard = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.param) {
          console.log("inc: ", (state[i].quantity += 1));
          state[i].quantity += 1;
        }
      }
      return state;
    case DECREMENT:
      for (let j = 0; j < state.length; j++) {
        if (state[j].id === action.param) {
          console.log("dec: ", (state[j].quantity -= 1));
          state[j].quantity -= 1;
        }
      }
      return state;
    default:
      return state;
  }
};
export default ProductCard;
