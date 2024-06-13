"use client"
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProduct() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "#0EA5E8",
          "#10B67D",
          "#E76A14",
          "#3370D3",
        ],
        borderColor: [
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div className=" bg-slate-700 p-8 rounded-lg flex flex-col">
      <h2 className=" text-xl font-bold">Best Selling Charts</h2>
      {/* chart */}
      <div style={{ width: '500px', height: '500px' }} className=" self-center pt-5">
        <Pie data={data}/>
      </div>
    </div>
  );
}
