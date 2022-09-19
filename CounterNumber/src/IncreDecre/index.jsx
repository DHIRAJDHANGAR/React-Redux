import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./action";

const ParentComponent = () => {
  const selector = useSelector((state) => {
    // console.log("state: ", state.counterReducer);
    return state.counterReducer;
  });

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  //   console.log("selector: ", selector);

  return (
    <>
      <div>
        <button onClick={increment}>Increment</button>
        <p>My Counter : {selector}</p>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};
export default ParentComponent;
