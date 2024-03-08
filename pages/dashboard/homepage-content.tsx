'use client';
import type { NextPage } from "next"
import { Card } from 'flowbite-react';
import Image from "next/image";
import { ChartComponent } from "@/components/core/Chart";
import { ApexOptions } from "apexcharts";

const optionsChartProduct = {
  chart: {
    id: "column-product",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "90%",
      borderRadiusApplication: "around" as any,
      borderRadius: 3,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 25,
      right: 25,
      top: -14,
      bottom: 34
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: true,
    labels: {
      show: false,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
}

const dataSeriesProduct = [
  {
    name: "Quantity",
    color: "#1A56DB",
    data: [
      { x: "01 Feb", y: 231 },
      { x: "02 Feb", y: 122 },
      { x: "03 Feb", y: 63 },
      { x: "04 Feb", y: 421 },
      { x: "05 Feb", y: 122 },
      { x: "06 Feb", y: 323 },
      { x: "07 Feb", y: 111 },
    ],
  },
]

const optionsChartUsers = {
  chart: {
    id: "week-signup-chart",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      // background: '#fff',
      horizontal: false,
      columnWidth: "25%",
      borderRadiusApplication: "around" as any,
      borderRadius: 3,
      colors:{
        backgroundBarColors:['#374151'],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 3
      }
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 2,
    padding: {
      left: 25,
      right: 25,
      top: -14,
      bottom: 34
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: true,
    labels: {
      show: false,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
}

const dataSeriesUsers = [
  {
    name: "Users",
    color: "#1A56DB",
    data: [
      { x: "01 Feb", y: 1334 },
      { x: "02 Feb", y: 2435 },
      { x: "03 Feb", y: 1753 },
      { x: "04 Feb", y: 1328 },
      { x: "05 Feb", y: 1155 },
      { x: "06 Feb", y: 1632 },
      { x: "07 Feb", y: 1336 },
    ],
  },
]

const HomePageContent:NextPage = function () {
  return (
    <>
    {/* <section>
      <header>
        <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
          Welcome to Dashboard
        </h1>
      </header>
    </section> */}
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <Card className="col-span-2 ">
          <ChartComponent />
        </Card>
        <Card className="max-w-full">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
            <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Neil image"
                      height="32"
                      src="/images/profile-picture-1.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Bonnie image"
                      height="32"
                      src="/images/profile-picture-3.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Michael image"
                      height="32"
                      src="/images/profile-picture-2.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Lana image"
                      height="32"
                      src="/images/profile-picture-4.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Thomas image"
                      height="32"
                      src="/images/profile-picture-5.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="w-full">
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
              New products
            </h3>
            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
            <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                </svg>
                12.5%
              </span>
              Since last month
            </p>
          </div>
          <ChartComponent 
            options={optionsChartProduct} 
            series={dataSeriesProduct} 
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="w-full">
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
              Users
            </h3>
            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
            <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                </svg>
                12.5%
              </span>
              Since last month
            </p>
          </div>
          <ChartComponent 
            options={optionsChartUsers} 
            series={dataSeriesUsers} 
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">

        </div>
      </div>
    </div>
    {/* <div className="h-full w-full">
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div> */}
    </>
  )
}

export {HomePageContent}