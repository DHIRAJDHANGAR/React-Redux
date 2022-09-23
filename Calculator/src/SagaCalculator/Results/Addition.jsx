import { useSelector } from "react-redux";

const AdditionResult = () => {
  const selector = useSelector((state) => {
    return state.sagaCalculatorSlice;
  });

  return (
    <>
      <div className="form-group">Result Addition : {selector.result}</div>
    </>
  );
};
export default AdditionResult;
