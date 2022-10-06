import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdditionResult from "./Addition";
import { add } from "./Addition/slice";
import DivisionResult from "./Division";
import { div } from "./Division/slice";
import MultiplyResult from "./Multiplication";
import { mul } from "./Multiplication/slice";
import SubstractionResult from "./Subtraction";

const ReduxSagaCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const dispatch = useDispatch();

  const dispatchAddNums = () => {
    dispatch(add({ num1, num2 }));
  };
  const dispatchSubNums = () => {
    // dispatch(add({ num1, num2 }));
  };
  const dispatchMulNums = () => {
    dispatch(mul({ num1, num2 }));
  };
  const dispatchDivNums = () => {
    dispatch(div({ num1, num2 }));
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
          onClick={dispatchAddNums}
        >
          Addition
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchSubNums}
        >
          Subtraction
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchMulNums}
        >
          Multiplication
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={dispatchDivNums}
        >
          Division
        </button>
      </div>
      <div>
        <AdditionResult />
        <SubstractionResult />
        <DivisionResult />
        <MultiplyResult />
      </div>
    </>
  );
};
export default ReduxSagaCalculator;
