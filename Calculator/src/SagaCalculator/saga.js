import { delay, put, takeLatest } from "redux-saga/effects";
import { addFailed, addSuccess } from "./sagaCalculatorSlice";

function* addNumberAction(actions) {
  try {
    const { num1, num2 } = actions.payload;

    // yield fakeAPI();
    yield delay(3000);

    const result = +num1 + +num2;

    yield put(addSuccess({ result }));
    return;
  } catch (e) {
    yield put(addFailed());
  }
}

export function* watchAddNumberAction() {
  yield takeLatest("SagaCalculator/add", addNumberAction);
}
