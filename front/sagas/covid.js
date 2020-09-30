import { all, delay, takeLatest, put, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  DATA_IMPORT_REQUEST,
  DATA_IMPORT_SUCCESS,
  DATA_IMPORT_FAILURE,
  DATA_CHART_REQUEST,
  DATA_CHART_SUCCESS,
  DATA_CHART_FAILURE,
} from "../reducers/covid";

function dataImportApi() {
  return axios.get("http://localhost:4000/");
}

function* dataPush() {
  try {
    const result = yield call(dataImportApi);
    yield put({
      type: DATA_IMPORT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: DATA_IMPORT_FAILURE,
      error: err.response.data,
    });
  }
}

function dataChartApi() {
  return axios.get("http://localhost:4000/OfferChartData");
}

function* dataChart() {
  try {
    const result = yield call(dataChartApi);
    yield put({
      type: DATA_CHART_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: DATA_CHART_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchDataPush() {
  yield takeLatest(DATA_IMPORT_REQUEST, dataPush);
}

function* watchDataChart() {
  yield takeLatest(DATA_CHART_REQUEST, dataChart);
}

export default function* covid() {
  yield all([fork(watchDataPush)]);
  yield all([fork(watchDataChart)]);
}
