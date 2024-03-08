"use client";
import react, { FC, HTMLProps, useState } from 'react';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const defaultOptions = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    labels:{
      style:{
        colors:['#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF']
      }
    },
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  yaxis:{
    labels:{
      style:{
        colors:['#9CA3AF']
      }
    }
  },
}

const defultSeries = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]

interface propsChart extends HTMLProps<HTMLDivElement> {
  typeChart?: 'line'| 'area' | 'bar' | 'boxPlot' | 'rangeBar' | 'rangeArea' | 'treemap' | 'donut' | 'radialBar',
  options?: ApexOptions,
  series?: any
}

export const ChartComponent: FC<propsChart> = function ({
  typeChart = 'bar',
  options = defaultOptions,
  series = defultSeries,
  className
}:propsChart) {
  // const [state, setState] = useState(
  //   {
  //     // options: {
  //     //   chart: {
  //     //     id: "basic-bar"
  //     //   },
  //     //   xaxis: {
  //     //     labels:{
  //     //       style:{
  //     //         colors:['#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF']
  //     //       }
  //     //     },
  //     //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  //     //   },
  //     //   yaxis:{
  //     //     labels:{
  //     //       style:{
  //     //         colors:['#9CA3AF']
  //     //       }
  //     //     }
  //     //   },
  //     // },
  //     series: [
  //       {
  //         name: "series-1",
  //         data: [30, 40, 45, 50, 49, 60, 70, 91]
  //       }
  //     ]
  //   }
  // ) 
  return (
    <>
      <ApexChart 
        className={className}
        options={options}
        series={series}
        type={typeChart}
        width="100%"
        height="100%"
      />
    </>
  )
};