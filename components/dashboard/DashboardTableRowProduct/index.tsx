"use client";

import { Checkbox, Dropdown, Table } from "flowbite-react";
import { type FC } from "react";
import { HiDotsHorizontal, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import ReactPaginate from "react-paginate";

// type DashboardPaginationProps = {
//   current: number;
//   total: number;
//   onPageClick: (value: number) => void
// }

const DashboardTableRowProduct: FC<any> = ({
  current, 
}: any) =>{
  return (
    <Table.Row className="bg-white shadow-md md:shadow-none block mb-5 rounded-xl md:table-row dark:border-gray-700 dark:bg-gray-800">
    {/* display on mobile */}
      <Table.Cell className="flex md:hidden justify-between items-center p-4 ">
        <div className='flex items-center gap-10'>
          <Checkbox className='checked:text-blue-600 focus:ring-blue-300 dark:focus:ring-blue-600' />
          <p className='text-xl text-blue-600 font-medium dark:text-blue-400 md:dark:text-white'>Apple MacBook Pro 17</p>
        </div>
        <Dropdown label="" renderTrigger={() => <button className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
          <HiDotsHorizontal className='w-5 h-5' />
        </button> }>
          <Dropdown.Item icon={HiOutlinePencilAlt}>Edit</Dropdown.Item>
          <Dropdown.Item icon={HiOutlineTrash}>Delete</Dropdown.Item>
        </Dropdown>
      </Table.Cell>

      <Table.Cell className="hidden justify-between items-center p-4 md:table-cell">
        <Checkbox className='checked:text-blue-600 focus:ring-blue-300 dark:focus:ring-blue-600' />
      </Table.Cell>
      <Table.Cell className="hidden w-full justify-between text-xl md:text-base md:table-cell md:whitespace-nowrap font-medium text-blue-600 dark:text-blue-400 md:dark:text-white">
        {'Apple MacBook Pro 17'}
      </Table.Cell>
      <Table.Cell className='flex justify-between md:table-cell'>
        <span className='font-bold capitalize dark:text-white md:hidden'>
          Color
        </span>
        <span className='pr-4'>
          Silver
        </span>
      </Table.Cell>
      <Table.Cell className='flex justify-between md:table-cell'>
        <span className='font-bold capitalize dark:text-white md:hidden'>
          Category
        </span>
        <span className='pr-4'>
          Laptop
        </span>
      </Table.Cell>
      <Table.Cell className='flex justify-between md:table-cell'>
        <span className='font-bold capitalize dark:text-white md:hidden'>
          price
        </span>
        <span className='pr-4'>
          $2999
        </span>
      </Table.Cell>
      <Table.Cell className='hidden md:inline-block'>
        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Edit
        </a>
      </Table.Cell>
      
      {/* <Table.Cell className='flex flex-col  text-gray-900 dark:text-white'>
        Product name
      </Table.Cell> */}
    </Table.Row>
  )
}

export default DashboardTableRowProduct