import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const datePointsValues = props.datePoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...datePointsValues);
  return (
    <div className="chart">
      {props.datePoints.map((datePoints) => (
        <ChartBar
          key={datePoints.label}
          value={datePoints.value}
          maxValue={totalMaximum}
          label={datePoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
