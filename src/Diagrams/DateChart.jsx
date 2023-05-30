import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const DateChart = ({ selectedDate, selectedBuild }) => {
  const [series, setSeries] = useState([
    {
      name: " kuća",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
    {
      name: "režija",
      data: [30, 47, 25, 40, 59, 60, 90],
    },
    {
      name: "fasada",
      data: [10, 67, 80, 90, 59, 60, 20],
    },
    {
      name: "iskop",
      data: [20, 37, 45, 10, 29, 30, 40],
    },
    {
      name: "paneli",
      data: [50, 57, 65, 20, 39, 90, 80],
    },
  ]);

  useEffect(() => {
    if (selectedDate) {
      const dateIndex = selectedDate.getDate() - 24;
      const newData = series.map((item) => {
        return {
          ...item,
          data: item.data.map((value, index) => {
            return index === dateIndex ? value * 2 : value;
          }),
        };
      });
      setSeries(newData);
    }
  }, [selectedDate]);

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "24.11.2022",
        "25.11.2022",
        "26.11.2022",
        "27.11.2022",
        "28.11.2022",
        "29.11.2022",
        "30.11.2022",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  useEffect(() => {
    if (selectedBuild) {
      const filteredData = series.find(
        (item) => item.name.trim() === selectedBuild.trim()
      );
      if (filteredData) {
        const newData = [
          {
            name: filteredData.name,
            data: filteredData.data.map(() => Math.floor(Math.random() * 100)),
          },
        ];
        setSeries(newData);
      }
    }
  }, [selectedBuild]);

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="700" />
    </div>
  );
};

export default DateChart;
