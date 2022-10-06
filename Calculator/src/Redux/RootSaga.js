import { all, fork } from "redux-saga/effects";
import { requestWatcher } from "../APICall/saga";
import { watchAdditionNumAction } from "../ReduxCalculator/Addition/saga";
import { watchDivisionNumAction } from "../ReduxCalculator/Division/saga";
import { watchMultiplicationNumAction } from "../ReduxCalculator/Multiplication/saga";
import { watchSubtractionNumAction } from "../ReduxCalculator/Subtraction/saga";

export default function* rootSaga() {
  yield all([
    fork(watchAdditionNumAction),
    fork(watchDivisionNumAction),
    fork(watchMultiplicationNumAction),
    fork(watchSubtractionNumAction),
    fork(requestWatcher),
  ]);
}
