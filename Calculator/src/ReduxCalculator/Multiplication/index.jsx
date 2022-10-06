import { useSelector } from "react-redux";
import SagaSpinner from "../spinner";

const MultiplyResult = () => {
  const selector = useSelector((state) => {
    return state.multiplySlice;
  });
  // console.log(selector.isFetching);
  return (
    <>
      {selector.isFetching ? (
        <SagaSpinner />
      ) : (
        <div className="form-group"> Multiply Result: {selector.result}</div>
      )}
    </>
  );
};
export default MultiplyResult;
