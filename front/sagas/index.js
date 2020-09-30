import { all, fork } from "redux-saga/effects";
import axios from "axios";

import covid from "./covid";

// axios.defaults.baseURL = "http://localhost:4000"; //데이터를 보낼때 중복되는 백엔드 주소

export default function* rootSaga() {
  yield all([fork(covid)]);
}
