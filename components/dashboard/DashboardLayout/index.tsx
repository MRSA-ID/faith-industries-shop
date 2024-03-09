"use client";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardSidebar } from "../DashboardSidebar";
import { DashboardNavbar } from "../DashboardNavbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { itemSidebarType } from "@/ts/types/components/dashboard/DashboardSidebar.type";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { DashboardFooter } from "../DashboardFooter";



const itemSidebar: itemSidebarType[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: HiChartPie,
  },
  {
    title: "E-commerce",
    path:"/dashboard/products",
    icon: HiShoppingBag,
    sub: [
      {
        title: "Products",
        path: "/dashboard/products"
      },
      {
        title: "Invoice",
        path: "/dashboard/invoice"
      }
    ]
  },
  {
    title:"Sign In",
    path:"",
    icon:HiArrowSmRight
  }
]

const DashboardLayout: FC<PropsWithChildren> = function({children}) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  )
}

const DashboardLayoutContent: FC<PropsWithChildren> = function({children}) {
  const { isCollapsed } = useSidebarContext();
  const { pathname } = useRouter()
  return (
    <>
      <Head>
        <title>Dashboard Admin | FTH Product</title>
      </Head>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar items={itemSidebar} pathname={pathname}/>
        <div 
          id="main-content" 
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}     
        </div>
      </div>
      <DashboardFooter />
    </>
  )
}

export default DashboardLayout