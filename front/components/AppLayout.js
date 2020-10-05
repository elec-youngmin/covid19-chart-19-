import React, { useEffect } from "react";

import Chart from "../components/Chart";
import Board from "../components/Board";
import AccExamCntChart from "../components/AccExamCntChart";
import ExamCntChart from "../components/ExamCntChart";
import AccExamCompCntChart from "../components/AccExamCompCntChart";
import AccDefRateChart from "../components/AccDefRateChart";
import DesideCntChart from "../components/DesideCntChart";
import DeathCntChart from "../components/DeathCntChart";
import CareCntChart from "../components/CareCntChart";
import ClearCntChart from "../components/ClearCntChart";

import Loading from "../components/Loading";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { DATA_CHART_REQUEST } from "../reducers/covid";

function AppLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: DATA_CHART_REQUEST });
  }, [dispatch]);
  const { loadDataDone, loadDataChartDone, data_flag } = useSelector(
    (state) => state.covid
  );

  return (
    <div>
      <Button variant="primary" size="lg" block className="title">
        코로나 19 현황 및 차트
      </Button>

      {loadDataDone ? <Board /> : <Loading />}
      {loadDataChartDone && <Chart />}
      {data_flag[0] && <ExamCntChart />}
      {data_flag[1] && <AccExamCntChart />}
      {data_flag[2] && <AccExamCompCntChart />}
      {data_flag[3] && <AccDefRateChart />}
      {data_flag[4] && <DesideCntChart />}
      {data_flag[5] && <DeathCntChart />}
      {data_flag[6] && <CareCntChart />}
      {data_flag[7] && <ClearCntChart />}
    </div>
  );
}

export default AppLayout;
