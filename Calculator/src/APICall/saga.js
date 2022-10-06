import { fail, success } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "./services/network";

function* ApiCallAction() {
  try {
    const URL = "https://fakestoreapi.com/products";

    const result = yield getData(URL);

    yield put(success({ result }));
  } catch (error) {
    yield put(fail());
  }
}

export function* requestWatcher() {
  yield takeLatest("ApiCall/request", ApiCallAction);
}
