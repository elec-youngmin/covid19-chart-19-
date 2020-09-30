import React, { useEffect } from "react";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.scss";
import { DATA_CHART_REQUEST } from "../reducers/covid";
import { useDispatch } from "react-redux";

const app = ({ Component }) => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default wrapper.withRedux(withReduxSaga(app));
