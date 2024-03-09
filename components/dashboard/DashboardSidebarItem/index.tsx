import { FC, HTMLProps, useEffect, useState } from "react"
import { Sidebar } from "flowbite-react";
import { itemSidebarType } from "@/ts/types/components/dashboard/DashboardSidebar.type";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

interface propsSidebarItem extends HTMLProps<HTMLDivElement> {
  pathname: string;
  item: itemSidebarType
}

export const DashboardSidebarItem: FC<propsSidebarItem> = ({pathname, item}: propsSidebarItem) => {
  const isActive = item.sub ? item.sub.some(subItem => subItem.path === pathname) : item.path === pathname
  const router = useRouter()
  

  if(item.sub){
    return (
      <Sidebar.Collapse 
        icon={item.icon} 
        label="E-commerce"
        className="mb-1.5"
        open ={ isActive && item.sub?.some(subItem => subItem.path === pathname) }
        renderChevronIcon={ (_, open) => {
          if (open) return <HiChevronUp className="text-xl"/>
          return <HiChevronDown className="text-xl" />
        }}
      >
        {
          item.sub.map((subItem, index) => (
            <Sidebar.Item 
              key={index}
              active={isActive && subItem.path === pathname}
              onClick={() => router.push(subItem.path)}
              className='cursor-pointer mb-1.5'
            >
              {subItem.title}
            </Sidebar.Item>
          ))
        }
      </Sidebar.Collapse>
    )
  }
  return (
    <>
      
        <Sidebar.Item 
          icon={item.icon}
          active={isActive}
          onClick={() => router.push(item.path)}
          className='cursor-pointer mb-1.5' 
        >
          {item.title}
        </Sidebar.Item>
    </>
  )
}