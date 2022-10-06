import { delay, put, takeLatest } from "redux-saga/effects";
import { divFailed, divSuccess } from "./slice";

function* divisionNumAction(actions) {
  try {
    const { num1, num2 } = actions.payload;
    yield delay(3000);

    const result = +num1 / +num2;

    yield put(divSuccess({ result }));
    return;
  } catch (error) {
    yield put(divFailed());
  }
}
export function* watchDivisionNumAction() {
  yield takeLatest("SagaDivision/div", divisionNumAction);
}
