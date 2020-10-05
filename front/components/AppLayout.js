import React, { useEffect } from "react";
import Link from "next/link";

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

import { Button, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { DATA_CHART_REQUEST, DATA_IMPORT_REQUEST } from "../reducers/covid";

function AppLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: DATA_CHART_REQUEST });
    dispatch({ type: DATA_IMPORT_REQUEST });
  }, [dispatch]);
  const { loadDataDone, loadDataChartDone, data_flag } = useSelector(
    (state) => state.covid
  );
  return (
    <div>
      <Link href="/">
        <Button variant="primary" size="lg" block className="title">
          코로나 19 현황 및 차트
        </Button>
      </Link>
      {loadDataDone ? <Board /> : <Spinner animation="border" />}
      {loadDataChartDone && <Chart />}
      {data_flag[0] && <ExamCntChart />} {/* 전체 검사수 차트 */}
      {data_flag[1] && <AccExamCntChart />} {/* 일일 검사수 차트 */}
      {data_flag[2] && <AccExamCompCntChart />} {/* 전체 음성 차트 */}
      {data_flag[3] && <AccDefRateChart />} {/* 누적 확진률 차트 */}
      {data_flag[4] && <Chart />} {/* 전체 확진자 차트 */}
      {data_flag[5] && <DeathCntChart />} {/* 사망자 차트 */}
      {data_flag[6] && <CareCntChart />} {/* 치료중인 환자수 차트 */}
      {data_flag[7] && <ClearCntChart />} {/* 치료 완료수 차트 */}
    </div>
  );
}

export default AppLayout;
