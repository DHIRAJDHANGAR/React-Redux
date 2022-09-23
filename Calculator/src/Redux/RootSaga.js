import { all, fork } from "redux-saga/effects";
import { watchAddNumberAction } from "../SagaCalculator/saga";
export default function* rootSaga() {
  yield all([fork(watchAddNumberAction)]);
}
