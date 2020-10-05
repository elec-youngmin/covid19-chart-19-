import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const ClearCntChart = () => {
  let date = [];
  let cur = [];
  let data;
  const items = useSelector((state) => state.covid.chartData);
  if (items[0].stateDt !== 20200302) {
    items.reverse();
  }
  for (let index in items) {
    date[index] = items[index].stateDt;
    cur[index] = items[index].clearCnt;
  }
  data = {
    labels: date,
    datasets: [
      {
        label: "전체 치료 완료수",
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
};

export default ClearCntChart;
