import { delay, put, takeLatest } from "redux-saga/effects";
import { addFailed, addSuccess } from "./slice";

function* additionNumAction(actions) {
  try {
    const { num1, num2 } = actions.payload;
    yield delay(3000);

    const result = +num1 + +num2;

    yield put(addSuccess({ result }));
    return;
  } catch (error) {
    yield put(addFailed());
  }
}
export function* watchAdditionNumAction() {
  yield takeLatest("SagaAddition/add", additionNumAction);
}
