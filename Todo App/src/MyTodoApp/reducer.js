import { ADDNOTE, DELETENOTE } from "./action";

const initialTodoState = [];

const TodoOprations = (state = initialTodoState, action) => {
  //   console.log("@DD payload: ", action.payLoad);
  switch (action.type) {
    case ADDNOTE:
      return [...state, action.payLoad];
    case DELETENOTE:
      return action.payLoad;
    default:
      return state;
  }
};
export default TodoOprations;
