import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdditionResult from "./Results/Addition";
import ShowSpinner from "./Results/ShowSpinner";

import { add } from "./sagaCalculatorSlice";

const SagaCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const selector = useSelector((state) => state.sagaCalculatorSlice);

  const dispatch = useDispatch();

  const dispatchAddNumbers = () => {
    dispatch(add({ num1, num2 }));
    //"1"+"2" == "12"
  };

  const dispatchSub = () => {
    // dispatch(sub({ num1, num2 }));
  };

  const dispatchMul = () => {
    // dispatch(mul({ num1, num2 }));
  };

  const dispatchDiv = () => {
    // dispatch(div({ num1, num2 }));
  };

  return (
    <>
      <div className="form-group">
        <div className="form-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchAddNumbers}
        >
          Addition
        </button>
        {selector.isFetching ? <ShowSpinner /> : <AdditionResult />}
        {/* <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchSub}
        >
          Subtraction
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchMul}
        >
          Multiplication
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchDiv}
        >
          Division
        </button> */}
      </div>
    </>
  );
};
export default SagaCalculator;
