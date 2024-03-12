"use client";

import { type FC } from "react";
import ReactPaginate from "react-paginate";

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
  return (
    <div className="flex flex-col md:flex-row justify-between">
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
        breakClassName="pg-break block flex items-center justify-center px-3 h-8 leading-tight border border-blue-100  hover:bg-blue-100 bg-white hover:border-blue-100 hover:text-blue-700 !text-blue-600 dark:border-gray-700 dark:!text-gray-400 dark:hover:bg-gray-700 dark:bg-gray-800 dark:hover:text-white"
        onPageChange={(page) => onPageClick(page.selected + 1)}
        forcePage={current - 1}
      />
    </div>
  )
}

export default DashboardPagination