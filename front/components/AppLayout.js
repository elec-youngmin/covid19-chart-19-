import React, { useEffect } from "react";

import Chart from "../components/Chart";
import Board from "../components/Board";
import Loading from "../components/Loading";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { DATA_IMPORT_REQUEST, DATA_CHART_REQUEST } from "../reducers/covid";

function AppLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: DATA_CHART_REQUEST });
  }, [dispatch]);
  const { loadDataDone, loadDataChartDone } = useSelector(
    (state) => state.covid
  );

  return (
    <div>
      <Button variant="primary" size="lg" block className="title">
        코로나 19 현황 및 차트
      </Button>
      {/* <Button variant="primary" size="lg" onClick={push}>
        차트 보기
      </Button> */}
      {loadDataChartDone ? <Board /> : <Loading />}
      {loadDataChartDone ? <Chart /> : <Loading />}
    </div>
  );
}

export default AppLayout;
