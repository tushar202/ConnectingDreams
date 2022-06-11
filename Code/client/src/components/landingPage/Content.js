import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Dreams Received", "Dreams Fulfilled"],
  ["2018", 8175000, 8008000],
  ["2019", 3792000, 3694000],
  ["2020", 3695000, 2896000],
  ["2021", 2099000, 1953000],
  ["2022", 1526000, 1517000],
];

export const data2 = [
  ["Roles", "Numbers"],
  ["Social Organization", 11],
  ["Changemakeres", 20],
  ["Mentors", 30],
];

export const options2 = {
  title: "My Daily Activities",
};

export const options = {
  chartArea: { width: "50%" },
  hAxis: {
    title: "Dreams Connected",
    minValue: 0,
  },
  vAxis: {
    title: "Year",
  },
};


const Content = () => {
  return (
    <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <Chart
        chartType="PieChart"
        data={data2}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}

export default Content;