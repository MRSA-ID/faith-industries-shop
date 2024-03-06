"use client";

import { useState, type FC, useEffect } from "react";
import { Sidebar, Button } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "@/context/SidebarContext";


export const DashboardSidebar: FC = function(){
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Default sidebar example"
      id="sidebar"
      collapsed={isCollapsed}
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16"
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="" icon={HiChartPie} >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}