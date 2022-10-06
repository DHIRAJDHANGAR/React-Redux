import { useSelector } from "react-redux";
import SagaSpinner from "../spinner";

const SubstractionResult = () => {
  const selector = useSelector((state) => {
    return state.subtractionSlice;
  });
  console.log(selector.isFetching);

  return (
    <>
      {selector.isFetching ? (
        <SagaSpinner />
      ) : (
        <div className="form-group">Substraction Result: {selector.result}</div>
      )}
    </>
  );
};
export default SubstractionResult;
