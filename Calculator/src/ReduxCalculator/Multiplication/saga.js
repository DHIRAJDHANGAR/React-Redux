import { delay, put, takeLatest } from "redux-saga/effects";
import { mulFailed, mulSuccess } from "./slice";

function* multiplyNumAction(actions) {
  try {
    const { num1, num2 } = actions.payload;
    yield delay(3000);

    const result = +num1 * +num2;

    yield put(mulSuccess({ result }));
    return;
  } catch (error) {
    yield put(mulFailed());
  }
}
export function* watchMultiplicationNumAction() {
  yield takeLatest("SagaMultiplication/mul", multiplyNumAction);
}
