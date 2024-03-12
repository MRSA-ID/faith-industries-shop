"use client";

import { useState, type FC, useEffect } from "react";
import { Sidebar, Button, SidebarItem } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiChevronDown,
  HiChevronUp,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import css from "styled-jsx/css";

type DashboardPaginationProps = {
  current: number;
  total: number;
  onPageClick: (value: number) => void
}

const DashboardPagination: FC<DashboardPaginationProps> = ({
  current, 
  total,
  onPageClick
}: DashboardPaginationProps) =>{
  const { isCollapsed } = useSidebarContext();
  
  

  // .pg-item{

  // }

  // .pg-item-active{

  // }

  // .pg-item-disabled{

  // }

  // .pg-break{

  // }

  return (
    // <nav className="flex  w-full items-center flex-col-reverse flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
    //   <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
    //   <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    //       </li>
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    //       </li>
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    //       </li>
    //       <li>
    //         <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    //       </li>
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    //       </li>
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    //       </li>
    //       <li>
    //         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    //       </li>
    //   </ul>
    // </nav>
    <div className="flex justify-between">
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing 
        <span className="font-semibold text-gray-900 px-1 dark:text-white">1 to {current}</span> 
        of 
        <span className="font-semibold text-gray-900 pl-1 dark:text-white">{total}</span>
      </span>
      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={3}
        pageCount={total}
        nextLabel={'Next'}
        previousLabel={'Previous'}
        renderOnZeroPageCount={null as any}
        containerClassName="pg-container inline-flex -space-x-px text-sm h-8"
        previousLinkClassName="pg-item flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border !border-blue-100 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 hover:border-blue-100 dark:bg-gray-800 dark:!border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        nextLinkClassName="pg-item flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-blue-100 rounded-e-lg hover:bg-blue-100 hover:text-blue-700 hover:border-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        pageLinkClassName="pg-item flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-blue-100 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeLinkClassName="!text-blue-600 border border-blue-100 !bg-blue-100 border-blue-100 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:!bg-gray-700 dark:!text-white"
        disabledLinkClassName="cursor-not-allowed !bg-blue-100 !text-blue-500 dark:!bg-gray-700 dark:!text-white dark:hover:bg-gray-700"
        breakClassName="pg-break block flex items-center justify-center px-3 h-8 leading-tight border border-blue-100 bg-blue-100 hover:bg-blue-100 hover:border-blue-100 hover:text-blue-700 !text-blue-600 bg-blue-50 dark:bg-gray-800 dark:border-gray-700 dark:!text-gray-400 dark:hover:bg-gray-700 dark:!bg-gray-700 dark:hover:text-white"
        onPageChange={(page) => onPageClick(page.selected + 1)}
        forcePage={current - 1}
      />
    </div>
  )
}

export default DashboardPagination