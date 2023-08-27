import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Channels, Channel } from "@/interfaces/Channel";
import { dateFormatter } from "@/utils/dateFormatter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph(props: {
  title: string;
  channelData: Array<number | string>;
  labels: Array<string>;
  label:string
}) {
  const labels = props.labels;
  const data = {
    labels,
    datasets: [
      {
        label: props.label,
        data: props.channelData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return <Line options={options} data={data} />;
}
