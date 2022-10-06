import { useSelector } from "react-redux";
import SagaSpinner from "../spinner";

const DivisionResult = () => {
  const selector = useSelector((state) => {
    return state.divisionSlice;
  });

  return (
    <>
      {selector.isFetching ? (
        <SagaSpinner />
      ) : (
        <div className="form-group"> Division Result: {selector.result}</div>
      )}
    </>
  );
};
export default DivisionResult;
