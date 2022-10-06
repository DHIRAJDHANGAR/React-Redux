import { useSelector } from "react-redux";
import SagaSpinner from "../spinner";

const AdditionResult = () => {
  const selector = useSelector((state) => {
    return state.additionSlice;
  });

  return (
    <>
      {selector.isFetching ? (
        <SagaSpinner />
      ) : (
        <div className="form-group"> Addition Result: {selector.result}</div>
      )}
    </>
  );
};
export default AdditionResult;
