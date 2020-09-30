import ReactDOM from "react-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { DATA_CHART_REQUEST } from "../reducers/covid";
import axios from "axios";

axios
  .get("http://localhost:4000/OfferChartData")
  .then(function (response) {
    items = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

function Chart() {
  let date = [];
  let cur = [];
  let data;
  const items = useSelector((state) => state.covid.chartData);
  items.reverse();

  for (let index in items) {
    date[index] = items[index].stateDt;
    cur[index] = items[index].decideCnt;
    if (cur[index] == 12801) {
      cur[index] = 10718; //공공데이터 오류로 데이터 수정
    }
  }
  data = {
    labels: date,
    datasets: [
      {
        label: "누적 확진자 수",
        data: cur,
        fill: false,
        pointHitRadius: 10,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="chartApp">
      <Line data={data} />
    </div>
  );
}

export default Chart;
