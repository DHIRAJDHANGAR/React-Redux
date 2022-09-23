import { useState } from "react";
import { useDispatch } from "react-redux";
import { div, mul, sub, sum } from "./calculatorSlice";
import MeraResult from "./indexV2";

const MeraCalculator = () => {
  const [num1, setNum1] = useState(Number);
  const [num2, setNum2] = useState(Number);

  const dispatch = useDispatch();

  const dispatchSum = () => {
    dispatch(sum({ num1, num2 }));
  };

  const dispatchSub = () => {
    dispatch(sub({ num1, num2 }));
  };

  const dispatchMul = () => {
    dispatch(mul({ num1, num2 }));
  };

  const dispatchDiv = () => {
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
          onClick={dispatchSum}
        >
          Summation
        </button>

        <button
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
        </button>

        <MeraResult />
      </div>
    </>
  );
};
export default MeraCalculator;
