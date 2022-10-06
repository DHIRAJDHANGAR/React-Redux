import { delay, put, takeLatest } from "redux-saga/effects";
import { subFailed, subSuccess } from "./slice";

function* substractionNumAction(actions) {
  try {
    const { num1, num2 } = actions.payload;
    yield delay(3000);

    const result = +num1 - +num2;

    yield put(subSuccess({ result }));
    return;
  } catch (error) {
    yield put(subFailed());
  }
}
export function* watchSubtractionNumAction() {
  yield takeLatest("SagaSubtraction/sub", substractionNumAction);
}
