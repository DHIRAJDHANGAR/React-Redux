import { useDispatch, useSelector } from "react-redux";
import {
  ADDITION,
  DIVISION,
  MULTIPLICATION,
  RESET,
  SUBTRACTION,
} from "./action";

const ParentComp = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // console.log("num1,num2", num1, num2);

  const selector = useSelector((state) => {
    return state.Oprations;
  });

  const dispatch = useDispatch();

  const addition = () => {
    dispatch({ type: ADDITION, val1: 10, val2: 5 });
  };

  const substraction = () => {
    dispatch({ type: SUBTRACTION, val1: 10, val2: 5 });
  };

  const multiplication = () => {
    dispatch({ type: MULTIPLICATION, val1: 10, val2: 5 });
  };

  const division = () => {
    dispatch({ type: DIVISION, val1: 10, val2: 5 });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  console.log("@DD LN19: ", selector);

  return (
    <>
      <div>
        {/* <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number 1"
            onChange={(e) => {
              setNum1(e.target.value);
              console.log("num1", num1);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number 2"
            onChange={(e) => {
              setNum2(e.target.value);
            }}
          />
        </div> */}
        <div className="form-group">
          {/* {num1} & {num2} */}
          Dafault values 10 & 5
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={addition}
        >
          ADDITION
        </button>
        <div className="form-group">{selector.add}</div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={substraction}
        >
          SUBSTRACTION
        </button>
        <div className="form-group">{selector.sub}</div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={multiplication}
        >
          MULTIPLICATION
        </button>
        <div className="form-group">{selector.mul}</div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={division}
        >
          DIVISION
        </button>
        <div className="form-group">{selector.div}</div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </>
  );
};
export default ParentComp;
