"use client";
import react, { FC, HTMLProps, useState } from 'react';
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const ChartComponent: FC<HTMLProps<HTMLDivElement>> = function ({className}) {
  const [state, setState] = useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  ) 
  return (
    <>
      <ApexChart 
        className={className}
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  )
};