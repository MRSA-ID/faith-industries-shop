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
import { itemSidebarType } from "@/ts/types/components/dashboard/DashboardSidebar.type";
import { DashboardSidebarItem } from "../DashboardSidebarItem";
import { useRouter } from "next/router";
import Link from "next/link";

interface propsSidebar {
  pathname: string;
  items: itemSidebarType[]
}

export const DashboardSidebar: FC<propsSidebar> = function({pathname, items}: propsSidebar){
  const { isCollapsed } = useSidebarContext();
  
  const router = useRouter()
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
          {
            items.map((item, index) => 
              <DashboardSidebarItem item={item} pathname={pathname} key={index}/>
            )
          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}