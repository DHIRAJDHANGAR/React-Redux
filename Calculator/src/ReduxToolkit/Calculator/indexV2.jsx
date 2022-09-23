import { useSelector } from "react-redux";

const MeraResult = () => {
  const calculatorResult = useSelector((state) => {
    return state.meraCounter;
  });

  //   console.log("@DD CalculatoreResult :", calculatorResult);

  return (
    <>
      <div className="form-group">
        <div className="form-group">
          Result Sum : {calculatorResult.resultOfSum}
        </div>

        <div className="form-group">
          Result Sub : {calculatorResult.resultOfSub}
        </div>

        <div className="form-group">
          Result Mul : {calculatorResult.resultOfMul}
        </div>

        <div className="form-group">
          Result Div : {calculatorResult.resultOfDiv}
        </div>
      </div>
    </>
  );
};
export default MeraResult;
